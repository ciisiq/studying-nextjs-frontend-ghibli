# Dockerfile

# Base Image
FROM node:16

# Create & set working directory
WORKDIR /usr/src/app

# Copy source files
COPY . .

# Install dependencies
RUN npm install --production

# Start the app
RUN npm run build
CMD ["npm", "start"]