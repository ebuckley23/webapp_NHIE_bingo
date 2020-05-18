#!/bin/sh
sed -i -f ./env/$1 ../usr/share/nginx/html/static/js/*.js
