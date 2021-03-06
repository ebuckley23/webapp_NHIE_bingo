# => Build container
FROM node:14-alpine as builder
RUN npm install -g expo-cli@3.20.9
WORKDIR /app
COPY . .
RUN yarn
RUN yarn web:build:prod

# => Run container
FROM nginx:1.18.0-alpine

# Args
ARG env

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY --from=builder /app/nginx /etc/nginx

# Static build
COPY --from=builder /app/web-build /usr/share/nginx/html/

# Copy shell scripts to container
WORKDIR /scripts
COPY --from=builder /app/scripts .

# Make our shell script executable
RUN chmod +x *.sh

# Run custom scripts
RUN ./start.sh $env

# Default port exposure
EXPOSE 80

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
