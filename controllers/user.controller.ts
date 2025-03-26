import { createUser, getUser } from '@services/user.service.js';
import { CreateUserDTO, GetUserDTO } from '@validation/user.schema.js';
import { HttpError } from 'errors/HttpError.js';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getUserController: RequestHandler<{}, any, GetUserDTO> = async (
    req,
    res
) => {
    const { email } = req.body;
    const user = await getUser(email);
    console.log('USER: ', user);
    if (user) {
        const { name } = user;
        res.send(`👋 Hello! my name is (${name}) | Email: (${email})`);
    } else {
        throw new HttpError(
            StatusCodes.NOT_FOUND,
            `User with email: (${email} not found)`
        );
    }
};

export const CreateUserController: RequestHandler<
    {},
    any,
    CreateUserDTO
> = async (req, res) => {
    const newUser = await createUser(req.body);
    res.status(StatusCodes.OK).json({
        message: `✅ User created Successfully!`,
        data: newUser,
    });
};
