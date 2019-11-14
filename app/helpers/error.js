const HTTP_STATUSES = {
  success: {
    ok: 200,
    created: 201,
    noContent: 204,
  },
  clientError: {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
  },
  serverError: {
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
  },
};

const onStartupError = (err, port) => {
  if (err.syscall !== 'listen') {
    throw err;
  }

  switch (err.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use.`);
      process.exit(1);
      break;
    default:
      throw err;
  }
};

const throwSequelizeError = err => {
  const { original: { code } } = err;

  if (err.isNormalized) {
    throw err;
  }

  console.error(err);
  throw {
    errors: [{ code, message: 'Database error.' }],
    isNormalized: true,
    statusCode: HTTP_STATUSES.serverError.internalServerError,
  };
}

const throwTwitterError = err => {
  const { errors } = JSON.parse(err.error);

  if (err.isNormalized) {
    throw err;
  }

  console.error(err);
  throw {
    errors,
    isNormalized: true,
    statusCode: HTTP_STATUSES.clientError.forbidden,
  };
};

module.exports = {
  onStartupError,
  throwSequelizeError,
  throwTwitterError,
};