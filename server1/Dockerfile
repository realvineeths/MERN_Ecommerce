FROM node:alpine

WORKDIR /server-2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "start"]