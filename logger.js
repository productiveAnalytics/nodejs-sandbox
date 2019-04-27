const EventEmitter = require('events');

const EVEN_NAME = 'messageLogged';

class Logger extends EventEmitter {

    constructor() {
        super();
        
        // event_emmitter.addListener(EVEN_NAME, function(eventArgs) {
        //     console.log(`Event '${EVEN_NAME}' happened with args ${eventArgs}`);
        // });

        // ABOVE is same as FOLLOWING.
        // 1. on() ~ addListener()
        // 2. callback function ~ shorthand => operator
        this.on(EVEN_NAME, (eventArgs) => {
            var jsonStr = JSON.stringify(eventArgs);
            console.log(`Event '${EVEN_NAME}' happened with args ${jsonStr}`);
        });
    }

    log(message) {
        this.emit(EVEN_NAME, {'msg': message});
    }
}

// export as logger object
// module.exports.logger = log;

// export as log function
module.exports = Logger;