class CustomError extends Error {
  public statusCode: number;
  public details: any;

  constructor(message: string, status: number, details: any) {
    super(message);
    this.statusCode = status;
    this.details = details;
  }

  public serializeError() {
    throw new Error('this method should be overwritten');
  }
}

export default CustomError;
