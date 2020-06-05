import { User } from '@/entities/User'
import { defaultIfNaN } from '@/utils/number'
import { Connection, createConnection } from 'typeorm'

let connection: Connection | null = null

export async function connect(): Promise<Connection> {
    if (connection === null) {
        connection = await createConnection({
            type: 'postgres',
            host: process.env.DB_HOST ?? 'localhost',
            username: process.env.DB_USERNAME ?? 'root',
            password: process.env.DB_PASSWORD ?? 'root',
            port: defaultIfNaN(process.env.DB_PORT, 5432),
            database: 'test',
            entities: [User],
            synchronize: true
        }).catch((err) => {
            console.error(err)
            process.exit(1)
        })
    }

    return connection
}
