import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

export interface UserObject {
    id?: number
    username: string
    createdAt: string
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: string

    // constructor(userObj: UserObject | undefined) {
    //     super()
    //     if (userObj === undefined) {
    //         return
    //     }

    //     const { id, username, createdAt } = userObj
    //     this.username = username
    //     this.createdAt = createdAt

    //     if (id !== undefined && id !== null) {
    //         this.id = id
    //     }
    // }
}
