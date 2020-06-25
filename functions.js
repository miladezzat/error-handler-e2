const { getColor, ApplicationError, printResetErrors } = require("./helpers");
const { getError, getErrorType } = require("./desc_errors");
/**
 * @author Milad E. Fahmy
 * @param {Object} error
 * @description this a function to custom log errors
 */
const logErrors = ({ error, file, path, ...restArgs }) => {
    let { type, statusCode, message, resetArgv, ...reset } = error;

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

const customError = ({ message = "",
    statusCode = "", ...resetArgv }) => {
    const error = getError(statusCode);

    const newError = new ApplicationError({
        message: message,
        statusCode: statusCode,
        description: error && error.description,
        err_message: error && error.message,
        type: getErrorType(statusCode),
        ...resetArgv,
    });
    return newError;
};

module.exports = {
    logErrors,
    customError,
}