export NODE_ENV ?= production
export CDN ?= https://rr5-platzi.surge.sh/

.PHONY: build
.DEFAULT_GOAL := help

build: ## Build static and upload to CDN
	npx webpack

statics:
	cp -R ./src/statics/ ./dist
	surge ./dist -d $(CDN)

start:
	npx webpack-dev-server --open

start_ssr: build statics ## start a local SSR service
	node server/index.js

help: ## show help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
