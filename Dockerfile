# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

ENV PORT 1337
# Expose the port the app will run on
EXPOSE 1337

# Build the Strapi application for production
RUN npm run build

# Start the Strapi application
CMD ["npm", "start"]