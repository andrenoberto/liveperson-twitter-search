FROM node:14

WORKDIR /api

COPY . /api/

RUN npm install

RUN npx sequelize db:migrate --env=database

EXPOSE 3000

CMD npm start
