import { dbInstance } from '@db/db.js';
import {
    CreationOptional,
    DataTypes,
    ForeignKey,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from 'sequelize';
import { User } from './user.model.js';

const modelOptions = {
    sequelize: dbInstance,
    modelName: 'License',
    tableName: 'licenses',
    timestamps: true,
};

export class License extends Model<
    InferAttributes<License>,
    InferCreationAttributes<License>
> {
    declare id: CreationOptional<string>;
    declare productName: string;
    declare expiresAt: Date;

    declare userId: ForeignKey<User['id']>;

    static associate(models: { User: typeof User }) {
        License.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    }
}
License.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        productName: { type: DataTypes.STRING, allowNull: false },
        expiresAt: { type: DataTypes.DATE, allowNull: false },
    },
    modelOptions
);
