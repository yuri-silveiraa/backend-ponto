import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'
import { Employee } from './Employee'

// MODEL PARA TABELA DE HORAS EXTRAS OU ATRASOS

export interface OvertimeInstance extends Model {
    overtime_and_delay_id: Number,
    employee_id: Number,
    timestamp: Date,
    tipo: 'atraso' | 'hora_extra',
    amount: Date,
}

export const Overtime = sequelize.define<OvertimeInstance>('Overtime', {
    overtime_and_delay_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM,
        allowNull: false
    },
    amount: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    tableName: "schedules",
    timestamps: false
})

Overtime.belongsTo( Employee, { foreignKey: 'employee_id'})