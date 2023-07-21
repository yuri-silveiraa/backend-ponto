import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'
import { Employee } from './Employee'

// MODEL PARA TABELA DE HORARIOS

export interface ScheduleInstance extends Model {
    schedule_id: Number,
    employee_id: Number,
    start_time: Date,
    end_time: Date,
}

export const Schedule = sequelize.define<ScheduleInstance>('Schedule', {
    schedule_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    tableName: "schedules",
    timestamps: false
})

Schedule.belongsTo( Employee, { foreignKey: 'employee_id'})