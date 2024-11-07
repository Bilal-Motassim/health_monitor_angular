FROM node:alpine

WORKDIR /usr/src/app

# Copy only package.json and package-lock.json to leverage Docker caching
COPY ./health_monitor_angular/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY ./health_monitor_angular/ ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Command to run the app
CMD ["ng", "serve", "--host", "0.0.0.0"]
