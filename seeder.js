const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    await prisma.character.createMany({
        data: [
            {
                name: 'Gandalf the gray', image: 'gandalf.png',
                gender: 'M', skinColor: 'white',
                hair: 'long', hairColor: 'gray',
                eyes: 'blue', facialHair: true,
                mustache: true, beard: true,
                hat: true, glasses: false,
            },
            {
                name: 'Frodo', image: 'frodo.png',
                gender: 'M', skinColor: 'white',
                hair: 'short', hairColor: 'brown',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Sam', image: 'sam.png',
                gender: 'M', skinColor: 'white',
                hair: 'short', hairColor: 'brown',
                eyes: 'brown', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Aragorn', image: 'aragorn.png',
                gender: 'M', skinColor: 'white',
                hair: 'long', hairColor: 'brown',
                eyes: 'brown', facialHair: true,
                mustache: true, beard: true,
                hat: false, glasses: false,
            },
            {
                name: 'Galadriel', image: 'galadriel.png',
                gender: 'F', skinColor: 'white',
                hair: 'long', hairColor: 'blonde',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Arwen', image: 'arwen.png',
                gender: 'F', skinColor: 'white',
                hair: 'long', hairColor: 'brown',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Legolas', image: 'legolas.png',
                gender: 'M', skinColor: 'white',
                hair: 'long', hairColor: 'blonde',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Gimli', image: 'gimli.png',
                gender: 'M', skinColor: 'white',
                hair: 'long', hairColor: 'brown',
                eyes: 'brown', facialHair: true,
                mustache: true, beard: true,
                hat: true, glasses: false,
            },
            {
                name: 'Gollum', image: 'gollum.png',
                gender: 'M', skinColor: 'white',
                hair: 'bald', hairColor: 'none',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Boromir', image: 'boromir.png',
                gender: 'M', skinColor: 'white',
                hair: 'short', hairColor: 'brown',
                eyes: 'brown', facialHair: true,
                mustache: true, beard: true,
                hat: false, glasses: false,
            },
            {
                name: 'Elrond', image: 'elrond.png',
                gender: 'M', skinColor: 'white',
                hair: 'long', hairColor: 'brown',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Eowyn', image: 'eowyn.png',
                gender: 'F', skinColor: 'white',
                hair: 'long', hairColor: 'blonde',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            },
            {
                name: 'Bilbo (old)', image: 'bilbo.png',
                gender: 'M', skinColor: 'white',
                hair: 'short', hairColor: 'white',
                eyes: 'blue', facialHair: false,
                mustache: false, beard: false,
                hat: false, glasses: false,
            }
        ]
    })
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