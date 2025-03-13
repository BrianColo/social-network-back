import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            {
                username: 'user1',
                email: 'user1@example.com',
                password: 'password1',
            },
            {
                username: 'user2',
                email: 'user2@example.com',
                password: 'password2',
            },
        ],
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });