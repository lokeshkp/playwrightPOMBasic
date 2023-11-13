import { test, expect } from "@playwright/test";

exports.fromPageLocators = class fromPageLocators {
  constructor(page) {
    this.page = page;

    this.txt_UserName = page.locator('form input[name="name"]');
    this.txt_Email = page.locator('input[name="email"]');
    this.txt_Password = page.locator("#exampleInputPassword1");
    this.drop_Gender = page.locator("#exampleFormControlSelect1");
    this.rdo_status = page.locator("#inlineRadio2");
    this.txt_date = page.locator('input[name="bday"]');
    this.btn_Submit = page.locator(".btn.btn-success");
    this.lblSuccess = page.getByText('× Success! The Form has been submitted successfully!.');
    this.txtTwoWayValue = page.getByRole('heading', { name: 'Two-way Data Binding example:' }).getByRole('textbox');
  }

  async gotoForm() {
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
  }

  async fillForm(username, email, password, gender, date) {
    await this.txt_UserName.fill(username);
    await this.txt_Email.fill(email);
    await this.txt_Password.fill(password);
    await this.drop_Gender.selectOption(gender);
    await this.rdo_status.click();
    await this.txt_date.fill(date);
    await this.btn_Submit.click();
  }

  async validateForm(username){
    await expect(this.lblSuccess).toBeVisible()
    const tet = await this.lblSuccess.textContent()
    console.log(tet)
    await expect(tet).toContain('Success')
  }
};
