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

const throwSequelizeError = err => {
  const { original: { code } } = err;
  console.error(err);
  throw {
    errors: [{ code, message: 'Database error.' }],
    isNormalized: true,
    statusCode: HTTP_STATUSES.serverError.internalServerError,
  };
}

const throwTwitterError = err => {
  const { errors } = JSON.parse(err.error);
  console.error(err);
  throw {
    errors,
    isNormalized: true,
    statusCode: HTTP_STATUSES.clientError.forbidden,
  };
};

module.exports = {
  throwSequelizeError,
  throwTwitterError,
};