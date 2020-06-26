
/**
 * @author Milad E. Fahmy
 * @param {String} colorName 
 * @description colorName cane be on of the following Bright, Dim, Underscore,
 * FgBlack, FgRed, FgGreen, FgYellow, FgBlue, FgMagenta, FgCyan, FgWhite
 */
const getColor = (colorName) => {
    const colors = {
        Bright: "\x1b[1m",
        Dim: "\x1b[2m",
        Underscore: "\x1b[4m",

        FgBlack: "\x1b[30m",
        FgRed: "\x1b[31m",
        FgGreen: "\x1b[32m",
        FgYellow: "\x1b[33m",
        FgBlue: "\x1b[34m",
        FgMagenta: "\x1b[35m",
        FgCyan: "\x1b[36m",
        FgWhite: "\x1b[37m",
    }
    return colors[colorName];
};

class ApplicationError extends Error {
    constructor({ message, ...resetArgv }) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        this.resetArgv = { ...resetArgv };
    }
}

class HttpError extends ApplicationError {
    constructor({ message, statusCode, type, ...resetArgv }) {
        super({ message, ...resetArgv });
        this.statusCode = statusCode;
        this.type = type;
        this.error_name = error && error.name;
    }
}

class CustomError extends ApplicationError {
    constructor({ message, error, ...resetArgv }) {
        super({ message, ...resetArgv });
        this.error_code = error.code;
        this.error_name = error.name;
    }
}


const printResetErrors = (restArgs) => {
    let restErrors = Object.keys(restArgs)
    for (let index = 0; index < restErrors.length; index++) {
        const key = restErrors[index];
        console.log(getColor("FgYellow"), `${key.toUpperCase()} => ${restArgs[key]}`);
    }
}


module.exports = {
    getColor,
    HttpError,
    printResetErrors,
    CustomError,
}