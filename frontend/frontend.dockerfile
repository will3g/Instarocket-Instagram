FROM node:latest
RUN mkdir /teste19_front
COPY . /teste19_front
WORKDIR /teste19_front
RUN npm install -g create-react-app
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000