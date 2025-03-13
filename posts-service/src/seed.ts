import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.post.createMany({
        data: [
            {
                title: 'First Post',
                content: 'This is the first post',
                userId: 1,
            },
            {
                title: 'Second Post',
                content: 'This is the second post',
                userId: 2,
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