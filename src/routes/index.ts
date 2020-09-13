import { RouteOptions } from 'fastify';
import { TestRouteHandler } from './controllers/test-route.controller';
import { testPreHandler } from './hooks/preHandler/test-route.preValidation';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { RouteGenericInterface } from 'fastify/types/route';

const testRoute: RouteOptions<Server, IncomingMessage, ServerResponse, RouteGenericInterface, unknown> = {
    method: 'GET',
    url: '/test',
    handler: TestRouteHandler.testRoute,
};



export const ROUTES = [testRoute];
