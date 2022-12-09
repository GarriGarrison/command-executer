import { IStreamLogger } from '../../core/handlers/stream-logger.interface';

export class ConsoleLogger implements IStreamLogger {
  private static logger: ConsoleLogger;

  public static getInstance() {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }

    return ConsoleLogger.logger;
  }

  public log(...args: any[]): void {
    console.log(...args);
  }

  public error(...args: any[]): void {
    console.error(...args);
  }

  public end(): void {
    console.log('Готово');
  }
}
