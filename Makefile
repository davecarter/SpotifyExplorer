export NODE_ENV ?= production
export CDN ?= https://react-router-project.d4vecarter.now.sh

.PHONY: build
.DEFAULT_GOAL := help

build: ## Build static and upload to CDN
	npx webpack

statics:
	cp -R ./src/statics/ ./dist
	npm run now-build

start:
	npx webpack-dev-server --open

start_ssr: build statics ## start a local SSR service
	node server/index.js

help: ## show help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
