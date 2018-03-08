#!/usr/bin/env bash
rm -rf _build
make html
#cp -r ../rook/assets/images/ _build/html/_static/img/
cp -r ../rook/assets/images/ _static/img/
rm -rf /tmp/rook-docs
cp -r _build/html /tmp/rook-docs
