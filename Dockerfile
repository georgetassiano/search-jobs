FROM node:lts-alpine
WORKDIR /var/www
RUN apk update && apk add bash
EXPOSE 8080
LABEL author="george pereira" 