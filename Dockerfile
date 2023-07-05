FROM node:18.16.0
RUN npm install -g ts-node

WORKDIR /app

COPY package.json .
RUN npm install
COPY . ./

ENV PORT 4000
EXPOSE $PORT
CMD ["npm", "run", "dev"]
