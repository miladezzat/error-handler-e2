import { UNAUTHENTICATED } from '../status-codes';
import CustomError from './custom-error';
import { returnSerializeError } from '../utils/custom-types';

class UnAuthenticated extends CustomError {
  constructor(message: string, details?: any) {
    super(message, UNAUTHENTICATED, details);
    this.name = 'UnAuthenticated';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default UnAuthenticated;
