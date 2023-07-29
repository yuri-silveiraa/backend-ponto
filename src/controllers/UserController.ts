import { Request, Response } from "express"
import { User } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let { user, password, id } = req.body
    
    let newUser = await User.create({ employee_id: id, user, password })

    res.status(201).json({ newUser })
}

export const listUsers = async (req: Request, res: Response) => {
    let list = await User.findAll()

    res.json(list)
}

export const getUser = async (req: Request, res: Response) => {
    let id = req.params.id
    let user = await User.findByPk(id)

    if(!user) {
        return res.json({ error: "User not found" }).status(404)
    }

    res.json({ user })   
}

export const updateUser = async (req: Request, res: Response) => {
    let id = req.params.id
    let { user, password } = req.body
    
    let use: any = await User.findByPk(id)
    if (!use) {
        return res.status(404).json({ error: 'User not found' })
    }

    if(user) { 
        use.user = user 
    }
    if(password) { 
        use.password = password 
    }

    await use.save()

    res.json({ use })
}

export const deleteUser = async (req: Request, res: Response) => {
    let id = req.params.id

    let user: any = await User.findByPk(id)
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    await User.destroy({ where: { user_id: id } })

    res.json({ message: 'deleted with success' })
}
