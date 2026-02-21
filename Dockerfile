# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose NestJS default port
EXPOSE 3000

# Run the app
CMD ["npm", "run","start:prod"]
