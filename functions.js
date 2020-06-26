const {
    getColor,
    HttpError,
    printResetErrors,
    CustomError,
} = require("./helpers");
const { getError, getErrorType } = require("./desc_errors");
/**
 * @author Milad E. Fahmy
 * @param {Object} error
 * @description this a function to custom log errors
 */
const logErrors = ({ error, file, path, ...restArgs }) => {
    let { type = "", statusCode, message, resetArgv, ...reset } = error;

    console.group(getColor("FgRed"), `Error: ${type.toUpperCase()}`)
    console.log(getColor("FgGreen"), "*** Start Logging Error ***\n");
    console.log(getColor("FgBlue"), `The error in File          : ${file}`);
    console.log(getColor("FgBlue"), `The error with status code : ${statusCode}`);
    console.log(getColor("FgBlue"), `The error in path          : ${path}`);
    console.log(getColor("FgBlue"), `Custom message             :${message}\n`);

    console.group(getColor("FgCyan"), `Related Errors: `);
    printResetErrors(restArgs);
    printResetErrors(reset);
    printResetErrors(resetArgv);
    console.groupEnd();
    console.log("\n");

    console.log(getColor("FgGreen"), "*** End Logging Error ***");
    console.groupEnd();
}

const createHttpError = ({ message = "",
    statusCode = "", ...resetArgv }) => {

    const error = getError(statusCode);
    let type = getErrorType(statusCode);
    let errObj = {
        message: message,
        statusCode: statusCode,
        type,
        ...resetArgv,
    }
    if (error) {
        errObj.description = error.description;
        errObj.err_message = error.message;
    }
    const httpError = new HttpError(errObj);
    return httpError;
};

const createCustomError = ({ message = "", error = {}, ...restArgs }) => {
    const customError = new CustomError({ message, error, ...restArgs });
    return customError;
};

module.exports = {
    logErrors,
    createHttpError,
    createCustomError,
}