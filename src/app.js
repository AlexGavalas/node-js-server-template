import server from './util/setup-server';
import { logger } from './util/logging';

const { PORT } = process.env;

const app = server.setup();

app.listen(PORT, () => {
    
    logger.info(`Server listening on port: ${PORT}`);
});
