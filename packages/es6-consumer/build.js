"use strict";
var _tsPkg = require("@rb/ts-pkg");
_tsPkg.LoggerFactory.init('es6-consumer');
var logger = _tsPkg.LoggerFactory.getLogger();
logger.info({
    hello: 'world'
}, 'this is a message');


//# sourceMappingURL=build.js.map