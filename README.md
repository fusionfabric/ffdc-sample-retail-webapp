# FFDC Sample Web App Using FFDC Design System

This repository contains a sample application using [FFDC Design System](https://github.com/fusionfabric/finastra-design-system) for front-end and [FusionFabric.cloud](https://developer.fusionfabric.cloud) for backend service.

## Demo
<img src="retail-app-demo.gif" width="80%">

## Installation

1. Clone this repository 

```
git clone git@github.com:fusionfabric/ffdc-sample-design-system.git
```

2. Register FFDC application

You need to register an application on [FusionFabric.cloud Developer Portal](https://developer.fusionfabric.cloud) and select [Account Information (US) - B2C](https://developer.fusionfabric.cloud/docs?workspace=FusionCreator%20Developer%20Portal&board=API%20Docs&api=b2c-account-v1-fc77362a-c2ee-4b23-b20e-5621249eb7a4#tag/Accounts) API. 

3. Setup environment variables

Open `.env` file then add `CLIENT_ID` and `CLIENT_SECRET` of application created at step 2.

4. Run `npm install`

## Build 

This application contains two applications, Angular Application and ExpressJs application. so you need to run two commands :

```
npm run build:server
npm run build
```

You can also run in watch mode.

```
npm run build:server:watch
npm run build -- --watch
```

To build Angular Application for production, use `npm run build -- --prod`

## Running application

After building applications, now you can run it:

```
npm run start:server
```

or with debug mode

```
npm run start:server:debug
```

Go to http://localhost:3000 and enjoy demo application.

## Credentials
For testing purpose, you can login in with one of the following credentials:

| User        | Password |
| :---------- | :------- |
| `ffdcuser1` | `123456` |
| `ffdcuser2` | `123456` |

## License
These sample applications are released under the Apache 2.0 License. See [LICENSE](./LICENSE) for details.
