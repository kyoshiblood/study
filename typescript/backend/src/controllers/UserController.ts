import { FastifyReply, FastifyRequest } from "fastify";

const users = [
    {
        username: "kyoshiblood",
        email: "kyoshiblood@email.com"
    }
]

interface IUser {
    username: string;
    email: string;
}

export default {
    async users(_: any, reply: FastifyReply) {
        return reply
        .code(200)
        .send({ users })
    },

    async create(request: FastifyRequest, reply: FastifyReply) {
        const { username, email } = request.body as IUser;

        const user = users.find(user => user.username === username);
        if(user) {
            reply
            .code(400)
            .send({ message: "user already exists" })
            return;
        }

        users.push({
            username,
            email
        })

        return reply
            .code(200)
            .send({ message: 'ok' })
    }
}