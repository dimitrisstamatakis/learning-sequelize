import { requireJson } from '@middleware/requrieJson.js';
import {
    CreateUserController,
    getUserController,
} from 'controllers/user.controller.js';
import express from 'express';
import { validate } from 'middleware/validate.js';
import { createUserSchema, getUserSchema } from 'validation/user.schema.js';

const router = express.Router();

router
    .get('/', requireJson, validate(getUserSchema), getUserController)
    .post('/', requireJson, validate(createUserSchema), CreateUserController);

export default router;
