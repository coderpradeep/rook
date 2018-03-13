#!/usr/bin/env bash
rm -rf _build
make html
#cp -r ../kato/assets/images/ _build/html/_static/img/
cp -r ../kato/assets/images/ _static/img/
rm -rf /tmp/kato-docs
cp -r _build/html /tmp/kato-docs
