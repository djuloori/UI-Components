FROM node:12.2.0-alpine as builder
WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app/package.json
RUN npm install --silent
RUN npm run build

CMD ["npm", "start"]

FROM nginx:1.13.3-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/default.conf /etc/nginx/conf.default
COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
