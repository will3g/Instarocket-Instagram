FROM node:latest
RUN mkdir /teste15_mobile
COPY . /teste15_mobile
RUN npm install
WORKDIR /teste15_mobile
ENTRYPOINT ["npm", "start"]