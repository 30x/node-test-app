FROM mhart/alpine-node:7

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]