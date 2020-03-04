FROM node:latest
RUN mkdir /teste15_back
COPY . /teste15_back
RUN npm install
WORKDIR /teste15_back
ENTRYPOINT ["npm", "run", "dev"]
EXPOSE 3333