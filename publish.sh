#!/bin/bash

TMPDIR=/tmp/cnake-p

mkdir -p $TMPDIR
rm -rf $TMPDIR/*

cp index.html cnake-prod.js style.css $TMPDIR/

git checkout gh-pages &&
cp -r $TMPDIR/* ./ &&
git add -A &&
git commit &&
git push origin gh-pages

git checkout master

