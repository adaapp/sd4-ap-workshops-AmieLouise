class Student {
    constructor(name, tutorGroup) {
        
        this._studentName = name;
        this._yearGroup = tutorGroup.substring(0, tutorGroup.length -1);
        this._form = tutorGroup[tutorGroup.length-1];
    }

    getName() {
        return this._studentName;
    }

    getYearGroup() {
        return this._yearGroup;
    }

    getForm(){
        return this._form;
    }

}

module.exports = Student