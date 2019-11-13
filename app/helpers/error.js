const HTTP_STATUS = {
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
  }
};

const onCreateSuccess = (result, response) => response.status(HTTP_STATUS.success.created).json(result);

const handleError = (err, response) => {
  logErrorMessage('Error message:', err);

  if (err.name = 'SequelizeUniqueConstraintError') {
    const errors = getErrorMessagesFromSequelize(err);
    response.status(HTTP_STATUS.clientError.conflict).json(errors);
  } else {
    response.status(HTTP_STATUS.serverError.internalServerError).end();
  }
};

const logErrorMessage = error => {
  let errorMessage = error;

  if (typeof error === 'object') {
    errorMessage = getErrorMessageAsString(error);
  }

  console.error(errorMessage);
};

const getErrorMessageAsString = error => JSON.stringify(error);

const getErrorMessagesFromSequelize = err => {
  const { errors } = err;

  return errors ? {
    errors: errors.map(({ message }) => ({ message })),
  } : {};
};

module.exports = {
  onCreateSuccess,
  handleError,
};