export interface IPersuitLogger {
  info: (logEvent: any, message: string) => void;
  warn: (logEvent: any, message: string) => void;
  error: (logEvent: any, message: string) => void;
}
