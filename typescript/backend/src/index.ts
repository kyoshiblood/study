import { fastify } from 'fastify';
import cors from '@fastify/cors'

const server = fastify({ logger: true });

import { Routes } from './routes/routes';

server.register(cors, {
    origin: '*',
})
server.register(Routes)

try {
    server.listen({ port: 3333 })
    console.log("server is running in port 3333")
} catch (e) {
    server.log.error(e)
    process.exit(1)
} 