function log(message) {
    var logMode = "DEBUG";
    console.log(`[${logMode}] : ${message}`);
}

// export as logger object
// module.exports.logger = log;

// export as log function
module.exports = log;