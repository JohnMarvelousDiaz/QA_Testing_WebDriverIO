import moment from "moment"

class herokuApp {

    // ***********************************************
    //              FOR TEST CASE NO. 1
    // ***********************************************

    get signUpButton(){
        return $('//button[@id="signup"]')
    }

    get firstNameInput(){
        return $('//input[@id="firstName"]')
    }

    get lastNameInput(){
        return $('//input[@id="lastName"]')
    }

    get emailInput(){
        return $('//input[@id="email"]')
    }

    get passwordInput(){
        return $('//input[@id="password"]')
    }

    get submitButton(){
        return $('//button[@id="submit"]')
    }

    get logoutButton(){
        return $('//button[@id="logout"]')
    }

    get successMessageOnSignUp(){
        return $('//p[text()="Click on any contact to view the Contact Details"]')
    }

    async navigateToLandingPage(){
        await browser.url('https://thinking-tester-contact-list.herokuapp.com/')
    }

    // ***********************************************
    //              FOR TEST CASE NO. 2
    // ***********************************************



    // ***********************************************
    //              FOR TEST CASE NO. 3
    // ***********************************************

    get addNewContactButton(){
        return $('//button[@id="add-contact"]')
    }

    get birthdateInput(){
        return $('//input[@id="birthdate"]')
    }

    get phoneInput(){
        return $('//input[@id="phone"]')
    }

    get street1Input(){
        return $('//input[@id="street1"]')
    }

    get street2Input(){
        return $('//input[@id="street2"]')
    }

    get cityInput(){
        return $('//input[@id="city"]')
    }

    get stateProvinceInput(){
        return $('//input[@id="stateProvince"]')
    }

    get postalCodeInput(){
        return $('//input[@id="postalCode"]')
    }

    get countryInput(){
        return $('//input[@id="country"]')
    }

    get successMessageOnAddContactPage(){
        return $('//h1[text()="Add Contact"]')
    }

    // ***********************************************
    //              FOR TEST CASE NO. 4
    // ***********************************************

    get firstDataOnTable(){
        return $('//*[@id="myTable"]/tr[1]')
    }

    get editContactButton(){
        return $('//button[@id="edit-contact"]')
    }

    get successMessageOnEditContactPage(){
        return $('//h1[text()="Contact Details"]')
    }

    get returnToContactListButton(){
        return $('//button[@id="return"]')
    }

    // ***********************************************
    //              FOR TEST CASE NO. 5
    // ***********************************************

    get lastDataOnTable(){
        return $('//*[@id="myTable"]/tr[3]')
    }

    get deleteContactButton(){
        return $('//button[@id="delete"]')
    }

    get tableId(){
        return $('//*[@id="myTable"]')
    }
}

export default new herokuApp()