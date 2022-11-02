FROM node:alpine AS builder
WORKDIR /react-app
COPY package.json .
RUN npm install
COPY . .
ENV NODE_ENV production
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=builder /react-app/dist /usr/share/nginx/html
COPY --from=builder /react-app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
