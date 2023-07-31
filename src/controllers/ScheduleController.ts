import { Request, Response } from "express"
import { Schedule } from "../models/Schedules"

export const createSchedule = async (req: Request, res: Response) => {
    let { employee_id, start_time, end_time } = req.body

    let time = await Schedule.create({ employee_id, start_time, end_time })

    res.status(201).json(time)
}

export const listSchedules = async (req: Request, res: Response) => {
    let list = await Schedule.findAll()

    res.json(list)
}

export const getSchedule = async (req: Request, res: Response) => {
    let id = req.params.id

    let schedule = await Schedule.findByPk(id)
    if(!schedule){
        return res.json({ error: 'No schedule found' }).status(404)
    }

    res.json(schedule)
}

export const updateSchedule = async (req: Request, res: Response) => {
    let id = req.params.id
    let { start_time, end_time } = req.body

    let schedule: any = await Schedule.findByPk(id)
    if(!schedule){
        return res.json({ error: 'No schedule found' }).status(404)
    }

    schedule.start_time = start_time
    schedule.end_time = end_time

    await schedule.save()

    res.json(schedule)
}

export const deleteSchedule = async (req: Request, res: Response) => {
    let id = req.params.id 

    await Schedule.destroy({where: { schedule_id: id }})
    
    res.json({ message: 'deleted with success' })
}