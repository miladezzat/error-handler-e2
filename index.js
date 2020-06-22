const error = (message, status) => {
    let error_type;
    if (status >= 400 && status < 500) {
        error_type = "Client Error.";
    } else if(status >= 500 && status < 600){
        error_type = " Server Error.";
    } else{
        error_type = `${status}, it should not be a error status code`;
    }

    return {
        message,
        status,
        error_type,
    };
}

module.exports = {
    error
}