import { LoggerFactory} from '@rb/ts-pkg'
import { IPersuitLogger } from '@rb/ts-pkg/build/cjs/types'

LoggerFactory.init('ts-consumer')
const logger = LoggerFactory.getLogger()

class MyClass {
    constructor(private readonly logger: IPersuitLogger){}
    log() {
        this.logger.info({ hello: 'world'}, 'from ts')
    }
}

const cls = new MyClass(logger)
cls.log()