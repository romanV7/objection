FROM alpine

RUN apk update && \
    apk upgrade && \
    apk add yarn \
    && rm -rf /var/cache/apk/*

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

EXPOSE 4000

RUN yarn build
CMD ["yarn", "start:prod"]
