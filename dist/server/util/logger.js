"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const options = {
    transports: [
        new winston_1.transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
        }),
        new winston_1.transports.File({ filename: 'debug.log', level: 'debug' })
    ]
};
const logger = new winston_1.Logger(options);
if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}
exports.default = logger;
//# sourceMappingURL=logger.js.map