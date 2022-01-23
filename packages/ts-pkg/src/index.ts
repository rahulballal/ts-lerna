import { IPersuitLogger } from "./types";
import Pino, {Logger} from "pino";

export class PersuitLogger implements IPersuitLogger {
  constructor(private readonly pinoLogger: Logger) {}
  info(logEvent: any, message: string) {
    this.pinoLogger.info({ body: logEvent, message });
  }
  warn(logEvent: any, message: string) {
    this.pinoLogger.info({ body: logEvent, message });
  }
  error(logEvent: any, message: string) {
    this.pinoLogger.info({ body: logEvent, message });
  }
}

export class LoggerFactory {
    private static loggerInstance: IPersuitLogger
    static init(loggerName: string) {
        const pino = Pino({ name: loggerName })
        this.loggerInstance = new PersuitLogger(pino)
    }

    static getLogger() {
        if(this.loggerInstance) return this.loggerInstance
        throw new Error('Logger instance not created!')
    }
}
