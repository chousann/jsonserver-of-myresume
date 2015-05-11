exports.run = function () {
    var faker = require("faker");
    var _ = require("lodash");

    return {
        people: _.times(100, function (n) {
            return {
                id: n,
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                phoneNumber: faker.phone.phoneNumber(),
                zipCode: faker.address.zipCode(),
                city: faker.address.city(),
                streetName: faker.address.streetName(),
                streetAddress: faker.address.streetAddress(),
                secondaryAddress: faker.address.secondaryAddress(),
                county: faker.address.county(),
                country: faker.address.country(),
                state: faker.address.state(),
                latitude: faker.address.latitude(),
                longitude: faker.address.longitude(),
                avatar: faker.internet.avatar(),
                email: faker.internet.email(),
                userName: faker.internet.userName(),
                password: faker.internet.password(),
                words: faker.lorem.words(),
                sentence: faker.lorem.sentence(),
                sentences: faker.lorem.sentences(),
                paragraph: faker.lorem.paragraph(),
                paragraphs: faker.lorem.paragraphs(),
                randomNumber: faker.helpers.randomNumber(),
                mustache: faker.helpers.mustache(),
                past: faker.date.past(),
                future: faker.date.future(),
                recent: faker.date.recent(),
                abbreviation: faker.hacker.abbreviation(),
                adjective: faker.hacker.adjective(),
                noun: faker.hacker.noun(),
                verb: faker.hacker.verb(),
                ingverb: faker.hacker.ingverb(),
                phrase: faker.hacker.phrase()
            }
        })
    }
}