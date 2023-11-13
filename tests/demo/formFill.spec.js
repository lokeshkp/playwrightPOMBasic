import {test, expect} from '@playwright/test'
import {fromPageLocators} from '../../pages/form'

test('Automation Practice Login Test', async({page}) =>{

    const usName = 'Lokesh'
    const form = new fromPageLocators(page)

    await form.gotoForm()
    await form.fillForm(usName, 'lokesh.kondepudi@gmail.com','test123', 'Female', '1976-08-02')  
    await form.validateForm(usName)
})