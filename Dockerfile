FROM node:latest
COPY . /komodo
WORKDIR /komodo
RUN npm install
CMD [ "node", "index.js"]
EXPOSE 9000