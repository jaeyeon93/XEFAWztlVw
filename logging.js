import * as Sentry from '@sentry/node';

Sentry.init({dsn: `${process.env.SENTRY_DSN}`});

const captureError = async (error) => {
  Sentry.captureException(error);
  await Sentry.flush(2000);
  return error;
};

module.exports = {
  captureError,
};
