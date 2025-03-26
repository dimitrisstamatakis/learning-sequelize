import { DataTypes } from 'sequelize';
import { dbInstance } from '../database/db.js';

export const User = dbInstance.define(
    // Model Name
    'User',

    // Attributes (Columns)
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

            get() {
                const rawValue = this.getDataValue('name');
                return '@@-' + rawValue.toUpperCase() + '-@@';
            },
            set(value: string) {
                this.setDataValue('name', 'NOOB => ' + value.trim());
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

            // Will perform some built-in validations
            validate: {
                isEmail: true,
                notEmpty: true,
            },
        },
    }
);
