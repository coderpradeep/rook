#!/usr/bin/env bash
echo $DB
rm ~/.rook/unittests.db
rm ~/.rook/celerydb.sqlite
rm ~/.rook/celery_results.sqlite
rm -f .coverage
export PYTHONPATH=./
export SUPERSET_CONFIG=tests.rook_test_config
set -e
rook/bin/rook db upgrade
rook/bin/rook version -v
python setup.py nosetests
