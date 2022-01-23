import { LoggerFactory } from '@rb/ts-pkg'

LoggerFactory.init('es6-consumer')
const logger = LoggerFactory.getLogger()

logger.info({ hello: 'world' }, 'this is a message')