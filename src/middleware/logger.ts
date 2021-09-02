class Middleware {
   loggerMiddleware = (req: any, res:any, next:any): void => {
     const currentDateTime: Date = new Date();

     const formattedDate = `${currentDateTime.getFullYear()
     }-${
       currentDateTime.getMonth() + 1
     }-${
       currentDateTime.getDate()
     } ${
       currentDateTime.getHours()
     }:${
       currentDateTime.getMinutes()
     }:${
       currentDateTime.getSeconds()}`;

     const { method } = req;
     const { url } = req;
     const status = res.statusCode;
     const message = `[${formattedDate}] ${method}:${url} ${status}`;

     // LOG Message
     // eslint-disable-next-line no-console
     console.log(message);

     next();
   };
}

export default new Middleware();
