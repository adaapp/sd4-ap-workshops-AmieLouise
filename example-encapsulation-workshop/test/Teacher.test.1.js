const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Teacher.js');

describe('Teacher', () => {
    it('should allow an object to be instantiated from the class', () => {
        let teacher1 = new Teacher('Amie', 'A.D', 'IT')
        expect(teacher1).to.be.an.instanceOf(Teacher);
    })

    it('should initalise years of service to 0 and allow us to change that using a setter method', () => 
    {
        let teacher1 = new Teacher('Amie', 'A.D', 'IT')
        expect(teacher1.getYearsService()).to.equal(0)
        teacher1.getYearsService(3)
        expect(teacher1.getYearsService()).to.equal(3)
    })

    it('Should have getter methods for name, yearGroup and Form', () => {
        let teacher1 = new Teacher('Amie', 'A.D', 'IT')
        expect(teacher1.getName()).to.equal('Amie');
        expect(teacher1.getInitials()).to.equal('A.D');
        expect(teacher1.getSubject()).to.equal('IT');
        expect(teacher1.getYearsService()).to.equal(0)
    })
})