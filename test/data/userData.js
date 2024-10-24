import moment from "moment";

class UserData {
    constructor(firstName, lastName, birthdate, password, email, phone, street1, street2, city, stateProvince, postalCode, country) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthdate = birthdate;
        this._password = password;
        this._email = email || this.generateUniqueEmail(); 
        this._phone = phone;
        this._street1 = street1;
        this._street2 = street2;
        this._city = city;
        this._stateProvince = stateProvince;
        this._postalCode = postalCode;
        this._country = country;
        this._newPostal = this.generateNewPostal();
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get birthdate() {
        return this._birthdate;
    }

    get password() {
        return this._password;
    }

    get email() {
        return this._email;
    }

    get phone() {
        return this._phone;
    }

    get street1() {
        return this._street1;
    }

    get street2() {
        return this._street2;
    }

    get city() {
        return this._city;
    }

    get stateProvince() {
        return this._stateProvince;
    }

    get postalCode() {
        return this._postalCode;
    }

    get country() {
        return this._country;
    }

    get newPostal(){
        return this._newPostal
    }

    generateUniqueEmail() {
        const strDateTime = moment(new Date()).format('YYYYMMDDHHmm');
        const formattedEmail = `test_${strDateTime}_15_052802@test.com`;
        return formattedEmail;
    }

    generateNewPostal() {
        const strNewPostal = moment(new Date()).format('MMDDHHmm');
        return strNewPostal;
    }
}

const defaultUser = new UserData("SampleFirstName", "SampleLastName", null, "SamplePassword");

const usersToAdd = [
    new UserData(
        "John", 
        "Marvelous", 
        "2002-05-28", 
        "Test123", 
        "testjmfirstuser@test.com",                    
        "1234567890", 
        "123 Main St", 
        "Apt 4B", 
        "Hagonoy", 
        "Bulacan", 
        "12345", 
        "Philippines"
    ),
    new UserData(
        "Maica", 
        "Franco", 
        "2002-04-03", 
        "Test456", 
        "testjmseconduser@test.com",                    
        "3216540987", 
        "456 Maple Ave", 
        "Suite 5A", 
        "San Simon", 
        "Pampanga", 
        "67890", 
        "Philippines"
    ),
    new UserData(
        "Vilma", 
        "Santos", 
        "1969-11-12", 
        "Test789", 
        "testjmthirduser@test.com",                    
        "9876543210", 
        "789 Oak Dr", 
        "test",                      
        "Pasig City", 
        "Metro Manila", 
        "54321", 
        "Philippines"
    )
];

const newPostal = new UserData().newPostal;

export { defaultUser, usersToAdd, newPostal };
