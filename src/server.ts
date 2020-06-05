import express from 'express'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './resolvers/ping'
import { UserResolver } from './resolvers/UserResolver'

export async function startServer(): Promise<express.Application> {
    const app = express()
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, UserResolver]
        })
    })
    server.applyMiddleware({
        app,
        path: '/graphql'
    })

    return app
}
