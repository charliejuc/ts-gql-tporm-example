import 'source-map-support/register'
import 'module-alias/register'
import 'reflect-metadata'
import { startServer } from './server'
import { connect } from './config/typeorm'
import { defaultIfNaN } from './utils/number'

const serverPort = defaultIfNaN(process.env.SERVER_PORT, 3000)

main().catch(console.error)

async function main(): Promise<void> {
    await connect()
    const app = await startServer()

    app.listen(serverPort, function serverListener() {
        console.log(`Listening on port ${serverPort}`)
    })
}
