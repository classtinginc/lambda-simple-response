'use strict';

const Response = {};

Response.success = (body, logKey, logMessage, callback) => {
  console.info(logKey, logMessage);
  callback(null, body);
};

Response.error = (err, logKey, callback) => {
  console.error(logKey, err);
  callback(err);
};

module.exports = Response;