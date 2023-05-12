FROM node:17-alpine
WORKDIR /src
COPY package.json .
RUN npm install --legacy-peer-deps
RUN npm install -g serve --legacy-peer-deps
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]