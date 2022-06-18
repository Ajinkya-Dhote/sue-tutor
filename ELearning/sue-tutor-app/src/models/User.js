class User {
    _id;
    _firstName;
    _middleName;
    _lastName;
    _age;
    _gender;
    _grade;
    _board;

    
    constructor () {}

    build ({id, firstName, middleName, lastName, age, gender, grade, board}) {
        this._id = id;
        this._firstName = firstName;
        this._middleName = middleName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
        this._grade = grade;
        this._board = board;
    }

    toJson() {
        return {
           id: this._id,
           firstName: this._firstName,
           lastName: this.lastName,
           middleName: this.middleName,
           age: this.age,
           gender: this.gender,
           grade: this.grade,
           board: this.board
        }
    }

    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
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

    get grade() {
        return this._grade;
    }
    set grade(value) {
        this._grade = value;
    }
    
    get board() {
        return this._board;
    }
    set board(value) {
        this._board = value;
    }


    
}

export default User;