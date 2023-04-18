FROM node:alpine

WORKDIR /server-1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]