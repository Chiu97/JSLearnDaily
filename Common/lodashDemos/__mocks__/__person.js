const faker = require('faker')

function Person () {
    return {
        name: faker.name.firstName(),
        age: faker.random.number(),
        isWeired: faker.random.boolean()
    }
}

function MockPersonFactory (personNum) {
    return Array.from({ length: personNum }, () => new Person())
}

module.exports = MockPersonFactory