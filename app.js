const log_funct = require('./logger');  // import logger.js

console.log(module); // print content of this module

const path = require('path'); // Path library
log_funct('This file is : '+ __filename);
var pathObj = path.parse(__filename); 
console.log(pathObj);

const os = require('os');
var os_platform = os.platform();
var total_mem = os.totalmem();
var free_mem = os.freemem();
log_funct('Platform : '+ os_platform);
log_funct('Total memory : '+ total_mem);
log_funct('Free  memory : '+ free_mem);