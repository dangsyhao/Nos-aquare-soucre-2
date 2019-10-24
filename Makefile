REGISTRY=registry.novogenialab.com
UI_HOME=$(NOTASQUARE_HOME)/not-a-square-cms-ui
UI_HOST_PORT=8231

build:
	sudo docker build -f docker/Dockerfile-dev -t notasquare/cms-ui/dev .

install:
	cd $(UI_HOME)/src/ && npm install

run:
	sudo docker run -it \
		-v $(UI_HOME)/src/:/opt/www/ \
		-p $(UI_HOST_PORT):3000 \
		notasquare/cms-ui/dev \
		npm run dev
