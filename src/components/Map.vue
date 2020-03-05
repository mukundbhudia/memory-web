<template>
  <div class="map">
    <div id="mapid"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import { mapState, mapActions } from 'vuex'
import store from '../store/index'

export default {
  name: 'Map',
  computed: {
    ...mapState([
      'coords',
      'mapZoomLevel'
    ])
  },
  methods: {
    ...mapActions([
      'userPicksCoords',
      'userSetsZoom'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      const mymap = L.map('mapid').setView([this.coords.lat, this.coords.lng], this.mapZoomLevel)

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mymap)

      var circle = L.circleMarker([51.5, -0.09], {
        className: 'pulse'
      })

      function debounce (callback, interval) {
        let debounceTimeoutId

        return function (...args) {
          clearTimeout(debounceTimeoutId)
          debounceTimeoutId = setTimeout(() => callback.apply(this, args), interval)
        }
      }

      function onMapClick (e) {
        store.dispatch('userPicksCoords', { lat: e.latlng.lat, lng: e.latlng.lng })
        circle
          .addTo(mymap)
          .setLatLng(e.latlng)
          .bindPopup('Here!')
          .openPopup()
      }

      function onZoomEnd (e) {
        store.dispatch('userSetsZoom', { mapZoomLevel: e.target._animateToZoom })
      }

      mymap.on('click', onMapClick)
      mymap.on('zoomend', debounce(onZoomEnd, 2000))
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapid {
  width: 100%;
  height: 400px;
}

.pulse {
  /* animation: pulsate 1s ease-out;
  -webkit-animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.0 */
  animation: pulsate 1s ease-out;
  -webkit-animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
}

@keyframes pulsate {
  0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
  50% {opacity: 1.0;}
  100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
  /* 0% {transform: opacity: 0.0;}
  50% {opacity: 1.0;}
  100% {transform: opacity: 0.0;} */
}
</style>
