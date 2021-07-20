import CustomError from './custom-error';
import { CONFLICT } from '../status-codes'
import { returnSerializeError } from '../utils/custom-types';

class Conflict extends CustomError {
  constructor(message: string, details?: any) {
    super(message, CONFLICT, details);
    this.name = 'Conflict';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default Conflict;
