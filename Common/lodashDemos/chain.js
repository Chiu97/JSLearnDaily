const MockPersonFactory = require('./__mocks__/__person')
const _ = require('lodash')

const persons = MockPersonFactory(100)
const chainResult = _.chain(persons)
                     .filter(person => person.isWeired)
                     .sortBy('age')
                     .value()
console.log(chainResult)
