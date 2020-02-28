<template>
  <div class="map">
    <div id="mapid"></div>
  </div>
</template>

<script>
// import UserConfig from '../../user.config'
import L from 'leaflet'
import { mapState, mapActions } from 'vuex'
import store from '../store/index'

export default {
  name: 'Map',
  computed: {
    ...mapState([
      'coords'
    ])
  },
  methods: {
    ...mapActions([
      'userPicksCoords'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      const mymap = L.map('mapid').setView([51.505, -0.09], 13)

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mymap)

      L.marker([51.5, -0.09]).addTo(mymap)
        .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup()

      var popup = L.popup()

      function onMapClick (e) {
        store.dispatch('userPicksCoords', { lat: e.latlng.lat, lng: e.latlng.lng })
        popup
          .setLatLng(e.latlng)
          // .setContent('Clicked at ' + e.latlng.toString())
          .setContent('Pin')
          .openOn(mymap)
      }

      mymap.on('click', onMapClick)
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
</style>
