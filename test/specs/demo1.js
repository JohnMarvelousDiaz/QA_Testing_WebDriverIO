import { expect, browser, $ } from '@wdio/globals'

describe('Demo 1', () => { 
    it('Demo 1', async () => {
        await browser.url("https://ultimateqa.com/filling-out-forms/")

        await $('//input[@id="et_pb_contact_name_0"]').waitForExist({ timeout: 3000 })
        await $('//input[@id="et_pb_contact_name_0"]').setValue("Marvs")
        await $('//textarea[@id="et_pb_contact_message_0"]').setValue('Hello')

        await $('//button[@name="et_builder_submit_button"]').click()

        await expect($('//p[text()="Thanks for contacting us"]')).toBeExisting()

        await browser.pause(5000);

    }) 
})