import {
    CreationOptional,
    DataTypes,
    HasManyGetAssociationsMixin,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from 'sequelize';
import { dbInstance } from '../database/db.js';
import type { License } from './license.model.js';

const modelOptions = {
    sequelize: dbInstance,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
};

export class User extends Model<
    InferAttributes<User, { omit: 'licenses' }>,
    InferCreationAttributes<User, { omit: 'licenses' }>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare email: string;

    declare getLicenses: HasManyGetAssociationsMixin<License>;
    declare licenses?: License[];

    // ✅ Static method to define associations
    static associate(models: { License: typeof License }) {
        User.hasMany(models.License, {
            sourceKey: 'id',
            foreignKey: 'userId',
            as: 'licenses',
        });
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
    },
    modelOptions
);
