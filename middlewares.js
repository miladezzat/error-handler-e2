const handleHttpError = (err, req, res, next) => {
    const resObj = {
        message: err.message,
        type: err.type,
        req_method: req.method,
    };
    if (process.NODE_ENV === "development") {
        resObj = { ...resObj, ...err.resetArgv, };
    };
    
    return res.status(err.statusCode).json(resObj);
}

module.exports = {
    handleHttpError,
}