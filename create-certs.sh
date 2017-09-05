#!/bin/bash

mkdir -p /var/www/letsencrypt

docker run -it --rm --name letsencrypt \
        -v /etc/letsencrypt:/etc/letsencrypt \
        -v /var/log/letsencrypt:/var/log/letsencrypt \
        -v /var/lib/letsencrypt:/var/lib/letsencrypt \
        -v /var/www/letsencrypt:/var/www/letsencrypt \
        quay.io/letsencrypt/letsencrypt \
        certonly \
        --webroot \
        --webroot-path /var/www/letsencrypt \
        --agree-tos \
        --renew-with-new-domains \
        -d weareignite.group \
        -d www.weareignite.group \
        -m matt@weareignite.group

docker kill --signal=HUP ignite_apache_1
