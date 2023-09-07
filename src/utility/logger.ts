import { createLogger, format, transports } from 'winston';

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};

export const logger = createLogger({
    levels: logLevels,
    transports: [new transports.Console()],
});
