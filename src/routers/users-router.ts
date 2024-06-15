import express from 'express'
import User from '../models/User'
import usersRepository from '../repositories/users-repository'

const usersRouter = express.Router()


usersRouter.post('/users', (req, res) => {
    const user: User = req.body
    usersRepository.ler( user.login, user.password, (user) => {
        if (user) {
            res.status(200).location(`/users`).send(user)
        } else {
            res.status(400).send()
        }
    })
})

usersRouter.get('/users', (req, res) => {
    usersRepository.lerTodos((users) => res.json(users))
})

export default usersRouter