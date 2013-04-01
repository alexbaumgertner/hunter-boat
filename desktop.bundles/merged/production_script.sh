#!/bin/bash

# put this script to /merged
# depends: npm install cssrb first


# clear prev
rm -rf build

# make builds dirs
mkdir -p build/css/ build/js/

# copy js
cp _merged.js build/js/_merged.js

# copy imgs
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



# save build date
echo `date` >  merged.html



# copy (and some content replaces) html files
ls ../ | while read line; do

#TODO (begin):
# replace &quot; to '
#TODO (end):

    cp ../$line/$line.html build;

# replace css/js source url
    cat build/$line.html | sed -i "s!_${line}\(\S*\).js!js/_merged\1.js!g" build/$line.html;
    cat build/$line.html | sed -i "s!_${line}\(\S*\).css!css/_merged\1.css!g" build/$line.html;
done;



# copy css img
find . -name '_*.css' | while read line; do \
    cssrb -c cssrb.js $line build/css/$line -cp; \
done


mv templates build/templates

# clean up temporary files
rm cssrb.js merged.html
