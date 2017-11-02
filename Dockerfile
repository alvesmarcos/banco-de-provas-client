FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir /code
WORKDIR /code
COPY ./package-lock.json ./package.json ./
COPY ./src ./src/
COPY ./public ./public/
RUN ls -la 
RUN npm install
CMD npm run start

EXPOSE 3000
