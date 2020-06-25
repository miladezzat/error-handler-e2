
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

module.exports = {
    getColor,
}