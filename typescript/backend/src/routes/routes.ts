import {
    FastifyInstance,
} from 'fastify';

import UserController from '../controllers/UserController';

interface IReply {
    200: { message: string };
    400: { message: string };
}

interface IUserBody {
    username: string;
    email: string;
}

export function Routes(server: FastifyInstance, _: any): void {
    server.get<{
        Reply: IReply
    }>("/", (_, reply) => {
        reply
            .code(200)
            .send({ message: 'ok' })
    })

    server.get("/users", UserController.users)
    server.post<{
        Body: IUserBody
        Reply: IReply
    }>("/users", UserController.create)
}