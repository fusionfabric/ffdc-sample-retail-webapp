"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorhandler_1 = tslib_1.__importDefault(require("errorhandler"));
const app_1 = tslib_1.__importDefault(require("./app"));
if (process.env.NODE_ENV !== 'production') {
    /**
     * Error Handler. Provides full stack - remove for production
     */
    app_1.default.use(errorhandler_1.default());
}
/**
 * Start Express server.
 */
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
server.timeout = app_1.default.get('timeout');
exports.default = server;
//# sourceMappingURL=server.js.map