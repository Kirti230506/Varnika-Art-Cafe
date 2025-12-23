FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose port for React
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
