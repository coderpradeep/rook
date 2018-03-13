#!/usr/bin/env bash
echo $DB
rm -f .coverage
export PYTHONPATH=./
export SUPERSET_CONFIG=tests.kato_test_config
set -e
kato/bin/kato version -v
export SOLO_TEST=1
# e.g. tests.core_tests:CoreTests.test_templated_sql_json
nosetests $1
