# first bump up package.json manually, commit and tag
rm kato/assets/dist/*
cd kato/assets/
npm run build
cd ../..
python setup.py sdist upload

