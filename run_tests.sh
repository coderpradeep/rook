#!/usr/bin/env bash
echo $DB
rm ~/.kato/unittests.db
rm ~/.kato/celerydb.sqlite
rm ~/.kato/celery_results.sqlite
rm -f .coverage
export PYTHONPATH=./
export SUPERSET_CONFIG=tests.kato_test_config
set -e
kato/bin/kato db upgrade
kato/bin/kato version -v
python setup.py nosetests
