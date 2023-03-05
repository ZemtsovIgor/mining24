FROM node:16-alpine

RUN apt update && \
    apt upgrade -y && \
    apt install -y bash curl python3 make g++ && mkdir -p /opt/app && npm install -g npm

WORKDIR /opt/app

ADD . .

RUN npm install

RUN npm run build

RUN npm run export

FROM nginx

ADD default.conf /etc/nginx/conf.d/

COPY --from=0 /opt/app/out /usr/share/nginx/html
