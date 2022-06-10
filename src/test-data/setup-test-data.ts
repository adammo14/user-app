import { IUser } from 'src/app/app.model'
import { USERS } from './user'

export function setupUsers(): IUser[] {
    return Object.values(USERS.body) as IUser[]
}
