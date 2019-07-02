class Teacher {
    constructor(name, initials, subject) {
        this._yearsOfService = 0;
        this._name = name;
        this._initials = initials;
        this._subject = subject;
    }

    getName() {
        return this._name;
    }

    getInitials() {
        return this._initials;
    }

    getSubject(){
        return this._subject;
    }

    getYearsService(){
        return this._yearsOfService;
    }

    setYearsService(years){
        this._yearsOfService = years;
    }
}

module.exports = Teacher