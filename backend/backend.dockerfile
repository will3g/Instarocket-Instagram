FROM node:latest
MAINTAINER will-e-vini
RUN mkdir /teste5
COPY /backend/. /teste5/
COPY /backend/package.json /teste5/
ADD ["/backend/package.json", "/teste5/"]
WORKDIR /teste5
RUN cd /teste5 && ls && cat package.json
RUN npm install
ENV NODE_PATH=/teste5/node_modules
WORKDIR /teste5
COPY . /teste5
ENTRYPOINT ["npm", "start"]