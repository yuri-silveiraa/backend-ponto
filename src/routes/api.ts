import { Router } from "express"
import  *  as UserController from "../controllers/UserController"
import * as EmployeeController from "../controllers/EmployeeController"

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

export default router