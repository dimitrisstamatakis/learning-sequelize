# A Modern Node.js, Typescript and Express Backend Project

## Main Technologies

| Package       | Version |
| ------------- | ------- |
| Node.js       | v22.14  |
| TypeScript    | v5.8.2  |
| Express.js    | v4.21.2 |
| Sequelize ORM | v6.37.6 |
| Zod           | v3.24.2 |
| mysql2        | v3.14   |

## Important Notes

### express-async-errors

Because of this package, the following code works without a `try...catch` block:

```ts
// controllers/user.controller.ts

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
```

## Typescript Related

### Common & Useful Generics

`RequestHandler<Params = {}, ResBody = any, ReqBody = any, ReqQuery = ParsedQs>`

Usage Example:

```ts
// "CreateUserDTO" type comes from Zod's Validation Schema through z.infer
export const getUserController: RequestHandler<{}, any, CreateUserDTO> = (
    req,
    res
) => {
    const { name, email } = req.body;
    res.send("👋 Hello from Users' Endpoint!");
};
```
