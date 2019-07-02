const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', () => {
    it('should allow an object to be instantiated from the class', () => {
        let student1 = new Student('Amie', '11C')
        expect(student1).to.be.an.instanceOf(Student);
    })

    it('Should have getter methods for name, yearGroup and Form', () => {
        let student = new Student('Amie', '1C')
        expect(student.getName()).to.equal('Amie');
        expect(student.getYearGroup()).to.equal('1');
        expect(student.getForm()).to.equal('C');
    })
})