import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { ROUTES } from './routes';

// export const routePlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
//     console.log('options:', options);
//     ROUTES.forEach((route) => {
//         fastify.route(route);
//     });
// };
export default async function routerPlugin(fastify, opts) {
    console.log('opts:', opts);
    ROUTES.forEach((route) => {
        fastify.route(route);
    });
}
