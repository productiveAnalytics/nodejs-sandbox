const Logger = require('./logger');  // import logger.js
var logger = new Logger();

console.log(module); // print content of this module

const path = require('path'); // Path library
logger.log('This file is : '+ __filename);
var pathObj = path.parse(__filename); 
console.log(pathObj);

const os = require('os');
var os_platform = os.platform();
var total_mem = os.totalmem();
var free_mem = os.freemem();
logger.log('Platform : '+ os_platform);
logger.log('Total memory : '+ total_mem);
logger.log('Free  memory : '+ free_mem);

const fs = require('fs');

// Read files synchronously.
// THIS IS NOT GOOD-PRACTICE IN NodeJS
console.log('\nReading files Synchronously ...')
var files = fs.readdirSync('./');
console.log(files);

// Read files asynchronously
// By default, functions in NodeJS are asynchronous
console.log('\nReading files Asynchronously >>>')
fs.readdir('./', function(err, files) {
    if (err) 
        logger.log(err)
    else 
        console.log(files);
});