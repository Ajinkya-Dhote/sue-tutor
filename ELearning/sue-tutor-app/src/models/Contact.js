class Contact {
    _address;
    _email;
    _mobileNumber;

    constructor() {}

    build({address, email, mobileNumber}) {
        this._address = address;
        this._email = email;
        this._mobileNumber = mobileNumber;
    }
  
    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get mobileNumber() {
        return this._mobileNumber;
    }

    set mobileNumber(value) {
        this._mobileNumber = value;
    }
}

export default Contact;