.PHONY: build-and-start build install start

all: build install

build-and-start: build install start

build:
	sh scripts/build.sh

install:
	sh scripts/example_install.sh

start:
	(cd example && npm start)