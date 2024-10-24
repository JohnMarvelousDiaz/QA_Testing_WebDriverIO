import { expect, browser, $ } from '@wdio/globals'
import ultimateQA from '../pageObjects/ultimateQA'
import objUtils from '../utils/objUtils'
import File from '../utils/File'
import Reporter from '../utils/Reporter'

describe('Not OOP', () => { 
    it('Not OOP', async () => {
        await browser.url("https://ultimateqa.com/filling-out-forms/")

        const submitButton = await $$('//button[@name="et_builder_submit_button"]')
        const nameInput = $('//input[@id="et_pb_contact_name_1"]')
        const messageInput = $('//textarea[@id="et_pb_contact_message_1"]')
        const captchaInput = $('//input[@name="et_pb_contact_captcha_1"]')

        const valueToAddText = await $('//*[@id="et_pb_contact_form_1"]/div[2]/form/div/div/p/span').getText()
        const numbers = valueToAddText.match(/\d+/g)?.map(Number)
        const sum = numbers.reduce((num1, num2) => num1 + num2, 0)

        await nameInput.waitForExist({ timeout: 3000 })
        await nameInput.setValue('Marvs')
        await messageInput.setValue('Hello')
        await captchaInput.setValue(sum.toString())

        await submitButton[1].click();

        await expect($('//p[text()="Thanks for contacting us"]')).toBeExisting()

    })
})

describe('OOP', () => {
    it('OOP', async () => {
        await ultimateQA.navigate()
        await Reporter.addLog('Navigate to UltimateQA Website')

        await objUtils.setObjectValue(ultimateQA.nameInput, "Marvs")
        await Reporter.addLog('User fill contact name field')


        await objUtils.setObjectValue(ultimateQA.messageInput, "Hello World!")
        await Reporter.addLog('User fill contact message field')

        const captchaValue = await ultimateQA.getCaptchaValue();
        await objUtils.setObjectValue(ultimateQA.captchaInput, captchaValue.toString());
        await Reporter.addLog('User answer captcha field')

        await objUtils.clickObject(ultimateQA.submitButton[1])
        await Reporter.addLog('User click submit button')

        await expect(ultimateQA.successMessage).toHaveText("Thanks for contacting us")
        browser.takeScreenshot()
    })

})