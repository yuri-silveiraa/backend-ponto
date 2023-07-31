import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'
import { Employee } from './Employee'

// MODEL DA TABELA DE REGISTRO DE PONTO 

export interface RecordInstance extends Model {
    record_id: Number,
    employee_id: Number,
    timestamp: Date,
    tipo: 'entrada' | 'saida',
}

export const Record = sequelize.define<RecordInstance>('Record', {
    record_id: {
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
        type: DataTypes.ENUM('entrada', 'saida'),
        allowNull: false
    }
}, {
    tableName: "time_records",
    timestamps: false
})

Record.belongsTo(Employee, { foreignKey: 'employee_id'})