/* eslint-disable class-methods-use-this */
/**
 * @description this is a custom error class
 */
class CustomError extends Error {
  public statusCode: number;

  public details: any;

  /**
   *
   * @param message this is the message
   * @param status this is the status code
   * @param details if you need to set some details about your error
   */
  constructor(message: string, status: number, details?: any) {
    super(message);
    this.statusCode = status;
    this.details = details;
  }

  /**
   * @description this is the function to serialize error
   */
  public serializeError() {
    throw new Error('this method should be overwritten');
  }
}

export default CustomError;
