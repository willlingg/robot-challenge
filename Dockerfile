FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Doing to get around corporate firewall. Wouldn't do this in prod
RUN npm config set strict-ssl false

# Install dependencies
RUN npm install

COPY . .

RUN npm run build

RUN npm test

EXPOSE 3000

CMD ["npm", "start"]