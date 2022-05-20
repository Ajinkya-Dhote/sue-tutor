class User {
    _firstName;
    _middleName;
    _lastName;
    _age;
    _gender;
    
    constructor () {}

    build ({firstName, middleName, lastName, age, gender}) {
        this._firstName = firstName;
        this._middleName = middleName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get middleName() {
        return this._middleName;
    }
    
    set middleName(value) {
        this._middleName = value;
    }

    get lastName() {
        return this._lastName;
    }
    
    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    
}

export default User;