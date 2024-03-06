# Use a base image with Node.js installed
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the React app
RUN npm run build

# Set the entry point for the container
CMD ["npm", "start"]
