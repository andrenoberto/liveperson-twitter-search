FROM node:14

WORKDIR /api

COPY . /api/

RUN npm install

RUN npx sequelize db:migrate --env=database

RUN npm install -g pm2@latest

EXPOSE 3000

CMD ["pm2-runtime", "pm2.config.js"]
