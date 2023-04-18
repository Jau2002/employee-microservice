FROM node:18-alpine3.17
WORKDIR /app

COPY tsconfig.json .
COPY package.json .
COPY src/ .
COPY scripts/start.sh .

RUN npm install --production
RUN chmod +x scripts/start.sh

CMD [ "scripts/start.sh" ]
