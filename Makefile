REGISTRY=registry.novogenialab.com
NOT_A_SQUARE_CMS_UI_HOME=$(NOTASQUARE_HOME)/not-a-square-cms-ui
NOT_A_SQUARE_CMS_UI_HOST_PORT=8231

build:
	sudo docker build -f docker/Dockerfile-dev -t notasquare/cms-ui/dev .

npm-install:
	cd $(NOT_A_SQUARE_CMS_UI_HOME)/src/ && npm install


run:
	sudo docker run -it \
		-v $(NOT_A_SQUARE_CMS_UI_HOME)/src/:/opt/www/ \
		-p $(NOT_A_SQUARE_CMS_UI_HOST_PORT):3000 \
		notasquare/cms-ui/dev \
		npm run dev

release:
	sudo docker build --no-cache -f docker/Dockerfile-prod -t notasquare/cms-ui/prod .
	sudo docker tag notasquare/cms-ui/prod $(REGISTRY)/notasquare/cms-ui/prod
	sudo docker push $(REGISTRY)/notasquare/cms-ui/prod
