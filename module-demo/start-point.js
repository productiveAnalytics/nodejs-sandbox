// NOTE: 
//     1: importing module from custom location
//     2: the imported "simple-module.js" has just one line console.log(arguments).
//            INTERVIEW QUE: What will be printed on console?
//                      ANS: As node wraps the file in function, 
//                           keyword "arguments"  refers to arguments of wrapping function.
//
const simple_module = require('./my_modules/simple-module');