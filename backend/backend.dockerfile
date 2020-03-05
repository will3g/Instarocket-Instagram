FROM node:latest
RUN mkdir /teste19_back
COPY . /teste19_back
WORKDIR /teste19_back
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
EXPOSE 3333