install:
	npm install

start:
	npx babel-node -- src/bin/robotCleaner.js

publish:
	npm publish

lint:
	npx eslint .

test:
	npm test

.PHONY: test
