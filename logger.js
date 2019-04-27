function log(logMode, message) {
    console.log(`[${logMode}]: ${message}`);
}

function log(message) {
    log("DEBUG", message);
}

// export as logger object
// module.exports.logger = log;

// export as log function
module.exports = log;