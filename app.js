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
        log_funct(err)
    else 
        console.log(files);
});

const EventEmitter = require('events');
var event_emmitter = new EventEmitter();

const EVEN_NAME = 'messageLogged';

// event_emmitter.addListener(EVEN_NAME, function(eventArgs) {
//     console.log(`Event '${EVEN_NAME}' happened with args ${eventArgs}`);
// });

// ABOVE is same as FOLLOWING.
// 1. on() ~ addListener()
// 2. callback function ~ shorthand => operator
event_emmitter.on(EVEN_NAME, (eventArgs) => {
    var jsonStr = JSON.stringify(eventArgs);
    console.log(`Event '${EVEN_NAME}' happened with args ${jsonStr}`);
});

function emit(eventArgs) {
    event_emmitter.emit(EVEN_NAME, eventArgs);
}

emit({'event_id': '123', 'msg': 'logMe'});