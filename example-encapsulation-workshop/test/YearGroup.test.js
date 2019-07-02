const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myYearGroup = new YearGroup(1, 'A.D')
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })

    it('Should have private attributes', () => {
        let myYearGroup = new YearGroup(1, 'A.D')
        expect(myYearGroup.year).to.equal(undefined);
        expect(myYearGroup.headOfYear).to.equal(undefined);
    })

    it('Should have getter methods for year and headOfYear', () => {
        let myYearGroup = new YearGroup(1, 'A.D')
        expect(myYearGroup.getYear()).to.equal(1);
        expect(myYearGroup.getHeadOfYear()).to.equal('A.D');
    })
})