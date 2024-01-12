const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    let allUsers = await prisma.character.findMany()
    console.log('Characters:')
    for (const user of allUsers) {
        console.log(user.name)
    }

    console.log('\nAsking for hair length long (correct):')
    allUsers = allUsers.filter(user => user.hair === 'long')
    allUsers.forEach(user => console.log(user.name))

    console.log('\nAsking for gender F (incorrect):')
    allUsers = allUsers.filter(user => user.gender !== 'F')
    allUsers.forEach(user => console.log(user.name))

    console.log('\nAsking for beard (correct):')
    allUsers = allUsers.filter(user => user.beard === true)
    allUsers.forEach(user => console.log(user.name))

    //same solution but with prisma query
    const allChars = await prisma.character.findMany({
        where: {
            AND: [
                {
                    hair: 'long',
                },
                {
                    gender: {
                        not: 'F'
                    },
                },
                {
                    beard: true,
                },
            ]
        }
    })
    // console.log(allChars)

    // console.log(allUsers)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
