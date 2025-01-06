const requestTrackingLog = (req, res, next) => {
  const requestId = Math.random().toString(36).substring(2, 9);
  console.log(
    `Before Request: METHOD: ${req.method} URL: ${
      req.url
    } At: ${new Date().toDateString()} ID: ${requestId}`
  );
  next();
  console.log(
    `After Request: METHOD: ${req.method} URL: ${req.url} ID: ${requestId}\n\n`
  );
};

module.exports = requestTrackingLog;
