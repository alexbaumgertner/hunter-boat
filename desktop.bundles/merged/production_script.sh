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
# replace _line(\S*)\.css to css/_merged$1.css
# cat $line.html | sed 's/_$line\(\S*\).css/css\/_merged\1.css/g'


# replace _line\.js to js/_merged.js
# replace &quot; to '
#TODO (end):
    cp ../$line/$line.html build;
    #cat build/$line.html | sed "s/_${line}\(\S*\).css/css\/_merged\1.css/gw";
    #cat build/$line.html | sed "s/_${line}\(\S*\).js/js\/_merged\1.js/gw";

    cat build/$line.html | sed "s!_${line}\(\S*\).css!css/_merged\1.css!g";
done;


exit 0;


# copy css img
find . -name '_*.css' | while read line; do \
    cssrb -c cssrb.js $line build/css/$line -cp; \
done


mv templates build/templates

# clean up temporary files
rm cssrb.js merged.html
