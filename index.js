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
}
/**
 * @author Milad E. Fahmy
 * @param {Object} error
 * @description this a function to custom log errors
 */
const logErrors = ({ type, file, path, message, status, ...restArgs }) => {

    console.group(getColor("FgRed"), `Error: ${type.toUpperCase()}`)
    console.log(getColor("FgGreen"), "*** Start Logging Error ***\n");
    console.log(getColor("FgBlue"), `The error in File          : ${file}`);
    console.log(getColor("FgBlue"), `The error with status code : ${status}`);
    console.log(getColor("FgBlue"), `The error in path          : ${path}`);
    console.log(getColor("FgBlue"), `Custom message             :${message}\n`);

    let restErrors = Object.keys(restArgs)
    for (let index = 0; index < restErrors.length; index++) {
        const key = restErrors[index];

        console.group(getColor("FgCyan"), `Related Errors: `);
        console.log(getColor("FgYellow"), `${key.toUpperCase()} => ${restArgs[key]}`);
    }
    console.groupEnd();
    console.log("\n")
    console.log(getColor("FgGreen"), "*** End Logging Error ***");
    console.groupEnd();
}


module.exports = {
    getColor,
    logErrors
}