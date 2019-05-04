// Exit after 10 sec
setTimeout(() => process.exit(), 10 * 1000);

// Handle 'exit' event
process.on('exit', () => {
   console.log('This will be printed on exit');
});

// NOTE: 
// The setTimeout(...) does NOT schedule the function immediately.
// Essentially the function is scheduled ONLY AFTER entire current script is executed.
let counter = 0;

var myFunct = () => {
    if (counter < 5) {
        console.log('Hello '+ process.env.USERNAME +' ' + counter);
    } else {
        clearInterval();
    }
    ++ counter;
}

setInterval(myFunct, 1000);