/* eslint-disable import/prefer-default-export */
import logger from './logger';
import handleError from './handle-error';
import notFound from './not-found';

export const loggerMiddleware = logger;
export const handleErrorMiddleware = handleError;
export const notFoundMiddleware = notFound;
