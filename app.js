const log_funct = require('./logger');  // import logger.js

console.log(module); // print content of this module

const path = require('path'); // Path library
log_funct('This file is : '+ __filename);
var pathObj = path.parse(__filename); 
console.log(pathObj);