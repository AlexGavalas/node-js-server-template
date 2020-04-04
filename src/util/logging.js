import { configure, connectLogger, getLogger } from 'log4js';

// LEVELS: ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
// %f for filename, %s for callstack

const { EXPRESS_LOG_LEVEL, APP_LOG_LEVEL } = process.env;

configure({
    appenders: {
        app: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[[%d{dd/MM/yyyy hh:mm:ss.SSS}] [%p] [%c]:%] %m',
            },
        },
    },
    categories: {
        default: {
            appenders: ['app'],
            level: APP_LOG_LEVEL,
            enableCallStack: true,
        },
    },
});

const logger = getLogger('main');

const expressLogger = connectLogger(getLogger('server'), { level: EXPRESS_LOG_LEVEL });

export {
    logger,
    expressLogger,
};
