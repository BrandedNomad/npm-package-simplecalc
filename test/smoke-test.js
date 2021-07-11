//Test

let should = require('should'), modulePath = "../index";

describe('module', () => {
    let _factory = null;

    before( done => {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath);
        done();
    });

    it('should exist', done => {
        should.exist(_factory);
        done();
    });

    it('create method should return valid object', done => {
        let calc = _factory.create();
        should.exist(calc); done();
    });


});



