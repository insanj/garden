SHELL := /bin/bash -o pipefail
VERSION := "$(shell git describe --tags --abbrev=0)"
TAG ?= $(VERSION)
IP_ADDRESS := $(shell ipconfig getifaddr en0)

PUBLIC_URL=http://insanj.github.io/garden/
LOCAL_URL=http://$(IP_ADDRESS):8080

.PHONY: serve
serve: env
	echo "REACT_APP_BASE_URL=$(LOCAL_URL)" >> .env
	npm start

.PHONY: build
build: env
	-rm .env
	npm run build
	rm -r -f docs
	mv build docs
# 	echo "$(PUBLIC_URL)" > docs/CNAME

.PHONY: env
env: export REACT_APP_GARDEN_TAG=$(TAG)
env:
	@echo "REACT_APP_GARDEN_TAG=$(shell echo $(REACT_APP_GARDEN_TAG))" > .env
	@echo "Wrote REACT_APP_GARDEN_TAG to .env with the given version: $(shell echo $(REACT_APP_GARDEN_TAG))"
