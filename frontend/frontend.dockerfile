FROM node:latest
RUN mkdir /teste15_front
COPY . /teste15_front
WORKDIR /teste15_front
RUN npm install -g create-react-app
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000