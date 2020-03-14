import server from './server';
import { logger } from './util/logging';

const { PORT } = process.env;

server.listen(PORT, () => {
    
    logger.info(`Server listening on port: ${PORT}`);
});
