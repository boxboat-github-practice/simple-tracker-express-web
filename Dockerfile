FROM node:lts-alpine
WORKDIR /app
COPY . /app
RUN npm install
CMD [ "node", "web-server.js"]
