# first bump up package.json manually, commit and tag
rm rook/assets/dist/*
cd rook/assets/
npm run build
cd ../..
python setup.py sdist upload

