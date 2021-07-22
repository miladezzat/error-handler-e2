import CustomError from './custom-error';
import { BAD_REQUEST } from '../status-codes';
import { returnSerializeError } from '../utils/custom-types';

/**
 * @description this is the bad request error
 */
class BadRequest extends CustomError {
  /**
   *
   * @param message this is the message of the error
   * @param details this is the details if you need to add some details for the error
   */
  constructor(message: string, details?: any) {
    super(message, BAD_REQUEST, details);
    this.name = 'BadRequest';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default BadRequest;
