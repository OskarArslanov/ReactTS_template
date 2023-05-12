FROM node:17-alpine
WORKDIR /src
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run prod
RUN serve -s build
CMD ["npm", "start"]