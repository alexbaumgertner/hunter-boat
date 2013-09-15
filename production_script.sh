#!/bin/bash

# depends: npm install cssrb first

# put this script to project root

bem make

cd desktop.bundles/merged/

# clean prev ()
rm -rf build/

# make builds dirs
mkdir -p build/css/ build/js/

# copy js
cp _merged.js build/js/_merged.js

# copy content imgs
cp -R img build/img


# create cssrb config file
BUILD_DIR=`pwd`/build
echo "exports.config = { \
    fromBase: '', \
    toBase:  '${BUILD_DIR}/', \
    patterns: { \
        'blocks': '../templates/' \
    } \
};" > cssrb.js

# collect all css  style images (backgrounds, etc)
find . -maxdepth 1 -name '_*.css' | while read line; do \
    cssrb -c cssrb.js $line build/css/$line -cp; \
done

# cssrb.js dont
mv templates build/templates


# collect pages html files and replace css and js links
ls ../ | while read line; do

    # copy
    cp ../$line/$line.html build;

    # replace css/js source url
    cat build/$line.html | sed -i "" -e "s!_${line}\(\S*\).js!js/_merged\1.js!g" build/$line.html;
    cat build/$line.html | sed -i "" -e "s!_${line}\(\S*\).css!css/_merged\1.css!g" build/$line.html;
done;


# clean up temporary files
rm cssrb.js
