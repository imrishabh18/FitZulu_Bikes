# Use an official Node.js runtime as the base image
FROM node:18-alpine
# FROM mcr.microsoft.com/windows/servercore:ltsc2019 AS base

# Create a directory to hold your application code
WORKDIR /src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your application will listen on
EXPOSE 3000

# Command to start your application
CMD ["npm", "start"]
