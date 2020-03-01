FROM node:12-alpine

EXPOSE 4200

ARG GIT_COMMIT=unspecified
ARG NODE_ENV=production
ARG USER=app
ARG GROUP=app
ARG UID=1337
ARG GID=1337

LABEL git_commit=$GIT_COMMIT

MAINTAINER root@hweeks.com

USER root

ADD . /app/mm

RUN cd /app/mm && yarn install &&\
    addgroup -g $GID -S $GROUP &&\
    adduser -u $UID -S $USER -G $GROUP &&\
    chown -R $USER:$GROUP /app/mm &&\
    chmod -R 0744 /app/mm

ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/mm

USER app
CMD node src/index.js

