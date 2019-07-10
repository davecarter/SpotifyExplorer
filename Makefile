export NODE_ENV ?= production
export CDN ?= /

.PHONY: build  start  start_ssr help
.DEFAULT_GOAL := help

start:
	npx webpack-dev-server --open --port 3000

clean:
	rm -Rf ./{public,server,server-dev} ./functions/{public,server}

build_spa: ## generate ./public
	npx webpack --config webpack.config.js
	cp -R ./src/statics/ ./public

build_server: ## generate ./server
	npx webpack --config webpack.server.config.js

deploy: clean build_spa build_server
	cp -R ./{public,server} ./functions
	surge ./functions/public -d $(CDN)
	firebase deploy

start_ssr: clean build_spa
	npx webpack --config webpack.dev.server.config.js
	node server-dev/

help: ## show help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
