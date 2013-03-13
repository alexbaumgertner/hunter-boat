#!/bin/bash


CURDIR=$(pwd)
COMMON_BUNDLE=$CURDIR/desktop.bundles/merged
BUILD_ROOT=$CURDIR/desktop.bundles/merged/build
NODE_MODULES=$CURDIR/node_modules

BORSCHIK=$NODE_MODULES/borschik/bin/borschik


mkdir -p $BUILD_ROOT $BUILD_ROOT/css $BUILD_ROOT/js $CURDIR/i $BUILD_ROOT/template

echo '{ "paths" : { "./": "../" }, "freeze_paths": { "./": "i/" } }' > $CURDIR/.borschik

find $COMMON_BUNDLE -name '_*.css' | while read line; do \
        $BORSCHIK -i $line -t css --freeze no --minimize no | tee $BUILD_ROOT/css/`basename $line` > /dev/null; \
done

find $COMMON_BUNDLE -name '_*.js' -a -not -name '*.*.js' | while read line; do \
        $BORSCHIK -i $line -t js --freeze no --minimize no | tee $BUILD_ROOT/js/`basename $line` > /dev/null; \
done

mv $CURDIR/i $BUILD_ROOT/template
rm -f $CURDIR/.borschik
