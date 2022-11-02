# Single Page Application

- Client running on https://transaction-spa.vercel.app
- Server running on https://transaction-spa-server.vercel.app (No need to run on local server)

## Setup & Start

```sh
$ git clone git@github.com:ardamutlu/transaction-spa.git

$ npm i
$ npm run start:dev
$ open http://localhost:3000
```

## Server

```sh
$ git clone git@github.com:ardamutlu/transaction-spa-server.git
```

## Storybook

```sh
$ npm run start:storybook
$ open http://localhost:6006
```

## Test

```sh
$ npm run test
./coverage/Ocov-report/index.html
```

## Bundle Analyzer

```sh
$ npm run dev:bundleanalyzer
$ npm run build:bundleanalyzer
```

## Production

```sh
$ npm run build
$ npm run build:start
$ open http://localhost:3000
```

### Docker

```sh
$ npm run build:docker
$ npm run start:docker
$ open http://0.0.0.0
```
