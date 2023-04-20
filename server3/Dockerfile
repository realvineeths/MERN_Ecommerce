FROM node:alpine

WORKDIR /server-3

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8003

CMD ["npm", "start"]