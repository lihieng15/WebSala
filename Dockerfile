# Use Node.js 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite application using npm
RUN npm run build

# Expose the port the app runs on
EXPOSE 8000

# Start the Vite application
CMD ["npm", "run", "dev"]
