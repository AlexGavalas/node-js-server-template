import { configure, connectLogger, getLogger } from 'log4js';

// LEVELS: ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF

const { EXPRESS_LOG_LEVEL, APP_LOG_LEVEL } = process.env;

configure({
    appenders: {
        app: {
            type: 'console',
        },
    },
    categories: {
        default: {
            appenders: ['app'],
            level: APP_LOG_LEVEL,
        },
    },
});

const logger = getLogger('[main]');

const expressLogger = connectLogger(logger, { level: EXPRESS_LOG_LEVEL });

export {
    logger,
    expressLogger,
};
