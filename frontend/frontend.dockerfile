FROM node:latest
MAINTAINER will-e-vini
#RUN mkdir /code
WORKDIR /instarocket
COPY . /instarocket/
COPY ./frontend/package.json /instarocket/
RUN npm install -g create-react-app
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000