#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run predeploy

# navigate into the dist output directory
cp webdeploy/.gitlab-ci.yml ./dist/.gitlab-ci.yml
cd ./dist

git init
git add -A
git commit -m 'deploy'
# git push origin master
git push -f git@gitlab.com:mukundbhudia/memory.mukund.uk.git master:gl-pages

cd -
