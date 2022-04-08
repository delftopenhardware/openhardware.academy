!/bin/bash
# Build jupyter-books faster with chained toc, build and launching in bash
# A simple bash script to automate the building of table of contents,

REPO=$(pwd)

if [ -d "./_toc.yml" ]
then
    rm -f "_toc.yml"
fi

# Build table of contents website
jupyter-book toc from-project "${REPO}" > _toc.yml

if [ -d "./_build" ]
then
    rm -rf "./_build"
fi

mkdir _build/

# Build html
jupyter-book build ${REPO}

# Make CNAME for github pages
cp docs/CNAME _build/html
 