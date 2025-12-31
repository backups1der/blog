# TODO: sonra yap
FROM alpine:latest

RUN apk add zola
WORKDIR /build
COPY . .
RUN zola build


FROM caddy:latest
COPY . /usr/share/caddy

EXPOSE 8080