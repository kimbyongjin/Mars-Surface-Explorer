run: ## Run the container, access via localhost:3003
	echo $(NASA_KEY)
	docker run -p 3003:3003 -e NASA_KEY=$(NASA_KEY) nasa-surface-explorer:version-1 npm start

build: ## Build an image
	docker build -t nasa-surface-explorer:version-1 .
