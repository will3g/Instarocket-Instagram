FROM node:latest
RUN mkdir /teste27_front
COPY . /teste27_front
WORKDIR /teste27_front
#RUN npm install -g create-react-app
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000