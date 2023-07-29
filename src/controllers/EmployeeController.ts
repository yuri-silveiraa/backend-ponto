import { Request, Response } from "express"
import { Employee } from "../models/Employee"

export const createEmployee = async ( req: Request, res: Response ) => {
    let { name, position, sector } = req.body

    let employee = await Employee.create( { name, position, sector } )

    res.status(201).json({ employee })
}

export const listEmployees = async (req: Request, res: Response) => {
    let list = await Employee.findAll()

    res.json(list)
}

export const getEmployee = async (req: Request, res: Response) => {
    let employee = await Employee.findByPk(req.params.id)

    res.json(employee)
}

export const updateEmployee = async (req: Request, res: Response) => {
    let id = req.params.id
    let { name, position, sector } = req.body
    
    let employe = await Employee.findByPk(id)
    if (!employe) {
        return res.status(404).json({ error: 'User not found' })
    }

    employe.name = name
    employe.position = position
    employe.sector = sector

    await employe.save()

    res.json({ employe })

}

export const deleteEmployee = async (req: Request, res: Response) => {
    let id = req.params.id

    await Employee.destroy({ where: { employee_id: id } })
    res.json({ message: 'deleted with success' })
}