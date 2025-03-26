// seed.ts
import { faker } from '@faker-js/faker';
import { License, User } from '@models/index.js';

export async function seedUsers(): Promise<User[]> {
    const users: User[] = [];

    for (let i = 0; i < 5; i++) {
        const user = await User.create({
            name: faker.person.fullName(),
            email: faker.internet.email().toLowerCase(),
        });

        users.push(user);
    }

    console.log('✅ Seeded 5 Users');
    return users;
}

export async function seedLicenses(users: User[]): Promise<License[]> {
    const licenses: License[] = [];

    for (let i = 0; i < 15; i++) {
        const randomUser = users[i % users.length];

        const license = await License.create({
            productName: faker.commerce.productName(),
            expiresAt: faker.date.soon({ days: 365 }),
            userId: randomUser.id,
        });

        licenses.push(license);
    }

    console.log('✅ Seeded 15 Licenses');
    return licenses;
}
