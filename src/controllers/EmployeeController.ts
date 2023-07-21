import { Request, Response } from "express"
import { Employee } from "../models/Employee"

export const createEmployee = async ( req: Request, res: Response ) => {
    let { name, position, sector } = req.body

    let employee = await Employee.create( { name, position, sector } )

    res.status(201).json({ employee })
} 