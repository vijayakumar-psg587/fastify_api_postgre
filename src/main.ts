import fastify, {FastifyInstance} from 'fastify';
import { SERVER_ADAPTER_INSTANCE } from './server.adapter';


// @ts-ignore
const app: FastifyInstance = fastify(SERVER_ADAPTER_INSTANCE.configFastifyServer());
SERVER_ADAPTER_INSTANCE.configRouters(app);
const port = parseInt(process.env.APP_PORT);
const host = process.env.APP_HOST;

app.listen(port, host)
    .then((data) => {
        console.log(`Server started listening at ${port}`);
    })
    .catch((err) => {
        console.log('err starting the server:', err);
        process.exit(1);
    });

// Code for graceful shutdown
process.on('SIGTERM', async () => {
    try {
        await app.close();
    } catch (err) {
        process.stdout.write(`Error closing the app  - ${err}`);
        process.exit(1);
    }
    process.stdout.write('App is closed because of a SIGTERM event');
    process.exit(1);
});

// TODO: use Promise.all syntax to wrap aroud the await calls (more than one) await that
// and catch the exception , instead of listening to this rejection event
process.on('unhandledRejection', function (errThrown) {
    // this is a stream
    process.stderr.write('unhandled err thrown:' + JSON.stringify(errThrown));
    process.exit(1);
});
