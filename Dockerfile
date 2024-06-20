# Use Node.js 14 as the base image
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



# Start the Vite application on port 8000
CMD ["npm", "run", "dev"]
