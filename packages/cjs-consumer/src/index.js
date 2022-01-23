const {LoggerFactory} = require('@rb/ts-pkg/build/cjs')

LoggerFactory.init('es6-consumer')
const logger = LoggerFactory.getLogger()

logger.info({ hello: 'world' }, 'this is a message')