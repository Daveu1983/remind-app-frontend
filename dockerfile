FROM node:lts-alpine
WORKDIR /home/tech_returners/reaction/remind-app-frontend
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]



