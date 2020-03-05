FROM node:latest
RUN mkdir /teste27_back
COPY . /teste27_back
WORKDIR /teste27_back
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
EXPOSE 3333