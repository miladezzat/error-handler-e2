const handleHttpError = (err, req, res, next) => {
    let resObj = {
        message: err.message,
        type: err.type,
        req_method: req.method,
    };
    if (process.env.NODE_ENV === "development") {
        resObj = { ...resObj, ...err.resetArgv, };
    };
    
    return res.status(err.statusCode).json(resObj);
}

module.exports = {
    handleHttpError,
}