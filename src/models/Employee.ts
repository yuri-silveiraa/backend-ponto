import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

// MODEL DA TABELA DO FUNCIONARIO 

export interface EmployeeInstance extends Model {
    employee_id: Number,
    name: String,
    position: String,
    sector: String
}

export const Employee = sequelize.define<EmployeeInstance>('Employee', {
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING
    },
    sector: {
        type: DataTypes.STRING
    }
}, {
    tableName: "employees",
    timestamps: false
})
