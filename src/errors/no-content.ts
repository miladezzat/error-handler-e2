import { NO_CONTENT } from '../status-codes';
import CustomError from './custom-error';
import { returnSerializeError } from '../utils/custom-types';

class NoContent extends CustomError {
  constructor(message: string, details?: any) {
    super(message, NO_CONTENT, details);
    this.name = 'NoContent';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default NoContent;
