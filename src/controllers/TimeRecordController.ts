import { Request, Response } from "express"
import { Record } from "../models/TimeRecords"

export const createRecord = async (req: Request, res: Response) => {
    let { employee_id, tipo } = req.body
    let time = Date.now()

    let record = await Record.create({ employee_id, tipo, timestamp: time })

    res.status(201).json(record)
}