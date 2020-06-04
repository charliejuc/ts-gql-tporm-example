import { createConnection, Connection } from 'typeorm'
import path from 'path'
import { defaultIfNaN } from '@/utils/number'

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
            entities: [
                path.join(__dirname, '..', 'entities', '**', '*.ts')
            ]
        }).catch((err) => {
            console.error(err)
            process.exit(1)
        })
    }

    return connection
}
