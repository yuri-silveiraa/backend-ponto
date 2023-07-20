import { Model, DataType, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model {
    user_id: Number,
    employee_id: Number,
    user: String,
    password: Number
}

export const User = sequelize.define<UserInstance>('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    }
})