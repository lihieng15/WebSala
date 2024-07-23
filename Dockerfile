# Use the official node image as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Use a smaller node image to serve the build files
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/dist ./dist

# Expose port 8000
EXPOSE 8000

# Serve the application
CMD ["serve", "-s", "dist", "-l", "8000"]
