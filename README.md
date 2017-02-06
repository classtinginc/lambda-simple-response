# lambda-simple-response
Very simple response with logging for lambda.

Basically, lambda-simple-response leaves log and invoke callback function passed in.

To stop lambda process as soon as you call lambda-simple-response,
set callbackWaitsForEmptyEventLoop of context as true(false by default)

## Install
```sh
$ npm install --save lambda-simple-response
```

## Usage

```js
const response = require('lambda-simple-response');

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  let result = {
    'message': 'success'
  };
  let err = {
    'message': 'error'
  };
  
  if (err) response.error(err, "Error JSON:", callback);
  else response.success(result, "handler:", "success", callback);
};
```