import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '@/entities/User'
import { UserRepository } from '@/repositories/UserRepository'

@Resolver()
export class UserResolver {
    @Mutation(() => Boolean)
    async createUser(
        @Arg('username') username: string,
        @Arg('createdAt') createdAt: string
    ): Promise<Boolean> {
        const user = new User()

        user.username = username
        user.createdAt = createdAt

        try {
            await user.save()
        } catch (err) {
            console.error(err)
        }

        return Boolean(user.id)
    }
}
