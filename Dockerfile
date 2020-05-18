# => Build container TODO
# FROM node:alpine as builder
# WORKDIR /app
# COPY package.json .
# COPY yarn.lock .
# RUN yarn
# COPY . .
# RUN yarn build

# => Run container
FROM nginx:alpine

# Args
ARG env

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY nginx /etc/nginx

# Static build
#COPY --from=builder /app/build /usr/share/nginx/html/
COPY ./web-build /usr/share/nginx/html

# Default port exposure
EXPOSE 80

COPY ./scripts /scripts

# Copy shell scripts to container
WORKDIR /scripts
COPY ./scripts .

# Make our shell script executable
RUN chmod +x *.sh

# Run custom scripts
RUN ./start.sh $env
