import logger from './logger';
import handleError from './handle-error';
import notFound from './not-found';
import asyncHandler from './async-handler';

export const loggerMiddleware = logger;
export const handleErrorMiddleware = handleError;
export const notFoundMiddleware = notFound;
export const asyncHandlerMiddleware = asyncHandler;
