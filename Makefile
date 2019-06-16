export NODE_ENV ?= production

.PHONY: build  start  start_ssr help
.DEFAULT_GOAL := help

start:
	npx webpack-dev-server --open --port 3000

build:
	cp -R ./src/statics/ ./dist
	npx webpack

deploy: build
	now

start_ssr: build ## start a local SSR service
	node server/index.js

help: ## show help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
