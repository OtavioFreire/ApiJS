import User from '../models/User'
import database from './database'

const usersRepository = {

    ler: (login: string, password: string, callback: (item?: User) => void) => {
        const sql = 'SELECT * FROM USERS WHERE login = ? AND password = ?'
        const params = [login, password]
        database.get(sql, params, (_err, row: User) => callback(row))
    },

    lerTodos: (callback: (itens: User[]) => void) => {
        const sql = 'SELECT * FROM USERS'
        const params: any[] = []
        database.all(sql, params, (_err, rows: User[]) => callback(rows))
    },
}

export default usersRepository