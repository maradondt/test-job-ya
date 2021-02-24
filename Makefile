install:
	npm install

start:
	node bin/board.js

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run
