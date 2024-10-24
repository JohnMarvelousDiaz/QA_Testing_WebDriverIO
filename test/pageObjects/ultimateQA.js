class ultimateQA {

    get nameInput(){
        return $('//input[@id="et_pb_contact_name_1"]')
    }

    get messageInput(){
        return $('//textarea[@id="et_pb_contact_message_1"]')
    }

    get captchaInput(){
        return $('//input[@name="et_pb_contact_captcha_1"]')
    }

    get submitButton(){
        return $$('//button[@name="et_builder_submit_button"]')
    }

    async getCaptchaValue() {
        const valueToAddText = await $('//*[@id="et_pb_contact_form_1"]/div[2]/form/div/div/p/span').getText();
        const numbers = valueToAddText.match(/\d+/g)?.map(Number)
        const sum = numbers.reduce((num1, num2) => num1 + num2, 0)
        return sum;
    }

    get successMessage(){
        return $('//p[text()="Thanks for contacting us"]')
    }

    async navigate(){
        await browser.url("https://ultimateqa.com/filling-out-forms/")
    }
}

export default new ultimateQA()