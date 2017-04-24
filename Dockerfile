FROM php:7.0-apache

COPY ./apache/apache2.conf /etc/apache2/apache2.conf
COPY ./apache/rewrite.load /etc/apache2/mods-enabled/rewrite.load
COPY ./apache/000-default.conf /etc/apache2/sites-enabled/000-default.conf
