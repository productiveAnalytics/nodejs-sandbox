console.log(arguments)

// As NodeJS wraps each file in function,
// above gets automatically converted to 
//    function (exports, module, require, __filename, __dirname) { // Wrapping function
//
//       console.log(arguments);
//
//       return module.exports; // Return exports
//    }
//
// So, "arguments" refers to keyword arguments of wrapping function, means all args passed to the function