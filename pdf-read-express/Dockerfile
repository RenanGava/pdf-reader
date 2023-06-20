FROM node:alpine

WORKDIR /app
COPY . .
ADD package.json .
EXPOSE 8080
RUN yarn install

CMD [ "node", "./server.js" ]