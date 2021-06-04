FROM node:lts-alpine


WORKDIR /vue-app

COPY package.json /vue-app/package.json
RUN npm install

COPY . /vue-app

CMD npm run serve