import { Router } from "express"
import  *  as UserController from "../controllers/UserController"
import * as EmployeeController from "../controllers/EmployeeController"
import * as ScheduleController from "../controllers/ScheduleController"
import * as TimeRecordController from "../controllers/TimeRecordController"

const router = Router()

// USERS 
router.post('/user', UserController.createUser)
router.get('/listusers', UserController.listUsers)
router.get('/user/:id', UserController.getUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

// EMPLOYEES
router.post('/employee', EmployeeController.createEmployee)
router.get('/listemployees', EmployeeController.listEmployees)
router.get('/employee/:id', EmployeeController.getEmployee)
router.put('/employee/:id', EmployeeController.updateEmployee)
router.delete('/employee/:id', EmployeeController.deleteEmployee)

// SCHEDULES
router.post('/schedule', ScheduleController.createSchedule)
router.get('/listschedules', ScheduleController.listSchedules)
router.get('/schedule/:id', ScheduleController.getSchedule)
router.put('/schedule/:id', ScheduleController.updateSchedule)
router.delete('/schedule/:id', ScheduleController.deleteSchedule)

// TIME RECORDS 

router.post('/timerecord', TimeRecordController.createRecord)

export default router