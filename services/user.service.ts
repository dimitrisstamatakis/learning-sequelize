import { User } from '@models/index.js';
import { CreateUserDTO } from '@validation/user.schema.js';

export const createUser = async (data: CreateUserDTO): Promise<User> => {
    return await User.create(data);
};

export const getUser = async (email: string): Promise<User | null> => {
    return await User.findOne({
        where: { email },
    });
};
