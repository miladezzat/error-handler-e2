const { getColor } = require("./helpers")
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
    logErrors,
}