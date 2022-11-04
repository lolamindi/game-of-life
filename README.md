# Javascript - Boilerplate

## Requirements:
Install [Node.js](https://nodejs.org/en/download/)
* This includes the Node package manager: `npm`

In case you have `yarn` installed and prefer using it, follow the 'yarn' commands henceforth.

### Test your installation
```bash
node -v
```

Based on your preferred package manager:

```bash
npm -v
```

or 

```bash
yarn -v
```

## Getting started

Install the dependencies in the repository by running:

```bash
npm install
```

or

```bash
yarn install
```

## Testing

We are using the [`jest`](https://jestjs.io/) library for testing

To run the tests, run:

```bash
npm test
```

or

```bash
yarn test
```

Jest recognises the files ending with `.test.js`. Make sure you place your tests in those files.

## Running the application

We have setup `index.js` as the entry point file. To run it, run the command:

```bash
npm start
```

or

```bash
yarn start
```

### Watch-mode
To run the tests in watch mode, you can run:

```bash
npm run test:watch
```

or

```bash
yarn run test:watch
```