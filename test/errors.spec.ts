import { expect } from 'chai';
import {
  BadRequestError,
  ConflictError,
  DatabaseError,
  InternalServerError,
  NoContentError,
  NotFoundError,
  UnAuthenticatedError,
  UnAuthorizedError,
  UnProcessableEntityError,
} from '../src/errors';

describe('/Errors', () => {
  it('should create an instance from BadRequestError', () => {
    const badRequestError = new BadRequestError('bad request error message');
    expect(badRequestError.message).to.be.a('string').and.equal('bad request error message');
  });

  it('should create an instance from ConflictError', () => {
    const conflictError = new ConflictError('conflict error message');

    expect(conflictError.message).to.be.a('string').and.equal('conflict error message');
  });

  it('should create an instance from DatabaseError', () => {
    const databaseError = new DatabaseError('database error');

    expect(databaseError.message).to.be.a('string').and.equal('database error');
  });

  it('should create an instance from InternalServerError', () => {
    const internalServerError = new InternalServerError('internal server error');

    expect(internalServerError.message).to.be.a('string').and.equal('internal server error');
  });

  it('should create an instance from NoContentError', () => {
    const noContentError = new NoContentError('no content error');

    expect(noContentError.message).to.be.a('string').and.equal('no content error');
  });

  it('should create an instance from  NotFoundError', () => {
    const notFoundError = new NotFoundError('not found  error');

    expect(notFoundError.message).to.be.a('string').and.equal('not found  error');
  });

  it('should create an instance from UnAuthenticatedError', () => {
    const unAuthenticatedError = new UnAuthenticatedError('un authenticated error');

    expect(unAuthenticatedError.message).to.be.a('string').and.equal('un authenticated error');
  });

  it('should create an instance from UnAuthorizedError', () => {
    const unAuthorizedError = new UnAuthorizedError('un authorized error');

    expect(unAuthorizedError.message).to.be.a('string').and.equal('un authorized error');
  });

  it('should create an instance from UnProcessableEntityError', () => {
    const unProcessableEntityError = new UnProcessableEntityError('un processable entity error');

    expect(unProcessableEntityError.message).to.be.a('string').and.equal('un processable entity error');
  });
});
