#!/usr/bin/env bash
echo $DB
rm -f .coverage
export PYTHONPATH=./
export SUPERSET_CONFIG=tests.rook_test_config
set -e
rook/bin/rook version -v
export SOLO_TEST=1
# e.g. tests.core_tests:CoreTests.test_templated_sql_json
nosetests $1
