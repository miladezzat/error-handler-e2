import { UNPROCURABLE_ENTITY } from '../status-codes';
import CustomError from './custom-error';
import { returnSerializeError } from '../utils/custom-types';

class UnProcessableEntity extends CustomError {
  constructor(message: string, details?: any) {
    super(message, UNPROCURABLE_ENTITY, details);
    this.name = 'UnProcessableEntity';
  }

  public serializeError(): returnSerializeError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export default UnProcessableEntity;
