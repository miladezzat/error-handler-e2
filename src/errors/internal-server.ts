import { INTERNAL_SERVER_ERROR } from '../status-codes';
import CustomError from './custom-error';
import { returnSerializeError } from '../utils/custom-types';

class InternalServer extends CustomError {
  constructor(message: string, details?: any) {
    super(message, INTERNAL_SERVER_ERROR, details);
    this.name = 'InternalServer';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default InternalServer;
