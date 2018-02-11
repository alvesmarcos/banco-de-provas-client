FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir /code
WORKDIR /code
ADD package-lock.json /code
ADD package.json /code 
ADD /src/ /code/src/
ADD /public/ /code/public/

