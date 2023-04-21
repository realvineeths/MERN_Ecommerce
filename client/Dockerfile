# # Specify the base image
# FROM node:16.14.1

# # Set the working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .


# # Specify the command to run when the container starts
# CMD [ "npm", "start" ]

FROM nginx:1.17

COPY build/ /usr/share/nginx/html