import herokuApp from "../pageObjects/herokuApp"
import objUtils from "../utils/objUtils"
import Reporter from '../utils/Reporter'
import File from "../utils/File.js"
import { defaultUser, usersToAdd, newPostal } from "../data/userData"

describe('Heroku App SignUp_TC001', () => {
    it('Navigate to thinking tester website', async () => {
        await herokuApp.navigateToLandingPage()
        await Reporter.addLog('Navigate to thinking tester website')
    })

    it('User click the Sign up button', async () => {
        await objUtils.clickObject(herokuApp.signUpButton)
        await Reporter.addLog('User click the Sign up button')
    })

    it('User fill first name field.', async () => {
        await objUtils.setObjectValue(herokuApp.firstNameInput, defaultUser.firstName)
        await Reporter.addLog('User fill first name field')
    })

    it('User fill last name field.', async () => {
        await objUtils.setObjectValue(herokuApp.lastNameInput, defaultUser.lastName)
        await Reporter.addLog('User fill last name field')
    })

    it('User fill email field.', async () => {
        await objUtils.setObjectValue(herokuApp.emailInput, defaultUser.email)
        await Reporter.addLog('User fill email field')
    })

    it('User fill password field.', async () => {
        await objUtils.setObjectValue(herokuApp.passwordInput, defaultUser.password)
        await Reporter.addLog('User fill password field')
    })

    it('Click submit button', async () => {
        await objUtils.clickObject(herokuApp.submitButton)
        await expect(herokuApp.successMessageOnSignUp).toHaveText('Click on any contact to view the Contact Details')
        await expect(herokuApp.logoutButton).toBeDisplayed()
        await Reporter.addLog('Click submit button')
    })
})

describe('Heroku App Login User_TC002', () => {
    it('Navigate to thinking tester website', async () => {
        await herokuApp.navigateToLandingPage()
        await Reporter.addLog('Navigate to thinking tester website')

    })

    it('User fill email field.', async () => {
        await objUtils.setObjectValue(herokuApp.emailInput, defaultUser.email)
        await Reporter.addLog('User fill email field')

    })

    it('User fill password field.', async () => {
        await objUtils.setObjectValue(herokuApp.passwordInput, defaultUser.password)
        await Reporter.addLog('User fill password field')
    })

    it('Click submit button', async () => {
        await objUtils.clickObject(herokuApp.submitButton)
        await expect(herokuApp.successMessageOnSignUp).toHaveText('Click on any contact to view the Contact Details')
        await expect(herokuApp.logoutButton).toBeDisplayed()
        await Reporter.addLog('Click submit button')
    })

})

describe('Heroku App Add Contact_TC003', () => {
    it('Navigate to thinking tester website', async () => {
        await herokuApp.navigateToLandingPage();
        await Reporter.addLog('Navigate to thinking tester website')
    });

    it('Login using the saved credentials.', async () => {
        await objUtils.setObjectValue(herokuApp.emailInput, defaultUser.email);
        await objUtils.setObjectValue(herokuApp.passwordInput, defaultUser.password);
        await Reporter.addLog('User filled required inputs')

        await objUtils.clickObject(herokuApp.submitButton);
        await Reporter.addLog('Click submit button')

        await expect(herokuApp.successMessageOnSignUp).toHaveText('Click on any contact to view the Contact Details');
        await expect(herokuApp.logoutButton).toBeDisplayed();
        await Reporter.addLog('Login using the saved credentials')

    });

    usersToAdd.forEach((user, index) => {

        it(`User ${index + 1} clicks the Add New Contact Button`, async () => {
            await objUtils.clickObject(herokuApp.addNewContactButton);
            await expect(herokuApp.successMessageOnAddContactPage).toHaveText('Add Contact')
            await Reporter.addLog('User clicks the Add New Contact Button')
        });

        it(`User ${index + 1} fill first name field.`, async () => {
            await objUtils.setObjectValue(herokuApp.firstNameInput, user.firstName);
            await Reporter.addLog('User fill first name field')
        });

        it(`User ${index + 1} fill last name field.`, async () => {
            await objUtils.setObjectValue(herokuApp.lastNameInput, user.lastName);
            await Reporter.addLog('User fill last name field')
        });

        it(`User ${index + 1} fill date of birth field.`, async () => {
            await objUtils.setObjectValue(herokuApp.birthdateInput, user.birthdate);
            await Reporter.addLog('User fill date of birth field')
        });

        it(`User ${index + 1} fill email field.`, async () => {
            await objUtils.setObjectValue(herokuApp.emailInput, user.email);
            await Reporter.addLog('User fill email field')
        });

        it(`User ${index + 1} fill phone field.`, async () => {
            await objUtils.setObjectValue(herokuApp.phoneInput, user.phone);
            await Reporter.addLog('User fill phone field')
        });

        it(`User ${index + 1} fill street address 1 field.`, async () => {
            await objUtils.setObjectValue(herokuApp.street1Input, user.street1);
            await Reporter.addLog('User fill street address 1 field')
        });

        it(`User ${index + 1} fill street address 2 field.`, async () => {
            await objUtils.setObjectValue(herokuApp.street2Input, user.street2);
            await Reporter.addLog('User fill street address 2 field')
        });

        it(`User ${index + 1} fill city field.`, async () => {
            await objUtils.setObjectValue(herokuApp.cityInput, user.city);
            await Reporter.addLog('User fill city field')
        });

        it(`User ${index + 1} fill state or province field.`, async () => {
            await objUtils.setObjectValue(herokuApp.stateProvinceInput, user.stateProvince);
            await Reporter.addLog('User fill state or province field')
        });

        it(`User ${index + 1} fill postal code field.`, async () => {
            await objUtils.setObjectValue(herokuApp.postalCodeInput, user.postalCode);
            await Reporter.addLog('User fill postal code field')
        });

        it(`User ${index + 1} fill country field.`, async () => {
            await objUtils.setObjectValue(herokuApp.countryInput, user.country);
            await Reporter.addLog('User fill country field')
        });

        it(`User ${index + 1} clicks submit button.`, async () => {
            await objUtils.clickObject(herokuApp.submitButton);
            await Reporter.addLog('Click submit button')
        });

    });
})

describe('Heroku App Edit Contact TC004', () => {

    it('User clicks the first contact on the table', async () => {
        await objUtils.clickObject(herokuApp.firstDataOnTable);
        await Reporter.addLog('User clicks the first contact on the table')
    })

    it('User clicks the edit contact button', async () => {
        await objUtils.clickObject(herokuApp.editContactButton);
        await Reporter.addLog('User clicks the edit contact button')
    })

    it(`User edit the postal code to the date and time today.`, async () => {
        await objUtils.setObjectValue(herokuApp.postalCodeInput, '');
        await objUtils.setObjectValue(herokuApp.postalCodeInput, newPostal);
        await Reporter.addLog('User edit the postal code to the date and time today');
    });

    it(`Clicks submit button.`, async () => {
        await objUtils.clickObject(herokuApp.submitButton)
        await Reporter.addLog('Click submit button')

        await expect(herokuApp.successMessageOnEditContactPage).toHaveText('Contact Details')
        await expect(herokuApp.returnToContactListButton).toBeDisplayed()

        await objUtils.clickObject(herokuApp.returnToContactListButton)
        await Reporter.addLog('Click return to contact list button')

        await expect(herokuApp.firstDataOnTable).toBeDisplayed()
    });
})

describe('Heroku App Delete Contact TC005', () => {
    it('User clicks the last contact on the table', async () => {
        await objUtils.clickObject(herokuApp.lastDataOnTable)
        await Reporter.addLog('User clicks the last contact on the table')
    })

    it('User clicks the delete contact button', async () => {
        await objUtils.clickObject(herokuApp.deleteContactButton)
        await Reporter.addLog('User clicks the delete contact button')
    })

    it('User clicks OK', async () => {        
        await browser.acceptAlert();
        await Reporter.addLog('User clicks OK')
    })

})

describe('Heroku App Export Contacts on File_TC006', () => {
    it('User creates a text file containing all the details of the existing contacts in the table.', async () => {
                
        let allContactData = '';

        for (let i = 0; i <= 1; i++) {
            const contactRow = await $$('.contactTableBodyRow')[i];

            const name = await contactRow.$('td:nth-child(2)').getText();
            const birthdate = await contactRow.$('td:nth-child(3)').getText();
            const email = await contactRow.$('td:nth-child(4)').getText();
            const phone = await contactRow.$('td:nth-child(5)').getText();
            const address = await contactRow.$('td:nth-child(6)').getText();
            const city = await contactRow.$('td:nth-child(7)').getText();
            const country = await contactRow.$('td:nth-child(8)').getText();

            const text_divider = '\n**************************************************\n'

            allContactData += `${text_divider}Name: ${name}\nBirthdate: ${birthdate}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nCity: ${city}\nCountry: ${country}${text_divider}`;
        }

        await File.createTxtFile(global.strPath, allContactData);
        await Reporter.addLog("User creates a text file containing all the details of the existing contacts in the table")
    })

})