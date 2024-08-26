import { Page } from "@playwright/test";
export default class RegisterPage{

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}

async enterFirstName(firstname: string){
    await this.page.locator('#input-firstname')
    .type(firstname)
}

async enterLastName(lastname: string){
    await this.page.locator('#input-lastname')
    .type(lastname)
}

async enterEmail(email: string){
    await this.page.locator('#input-email')
    .type(email)
}
async enterTelephone(phone: string){
    await this.page.locator('#input-telephone')
    .type(phone)
}

async enterPassword(password: string){
    await this.page.locator('#input-password')
    .type(password)
}

async enterConfirmPassword(password: string){
    await this.page.locator('#input-confirm')
    .type(password)
}

async isSubscribe(){
    return await this.page.locator("#input-newsletter-no").isChecked()
}

async clickTermandCondition(){
    this.page.click("#input-agree")
}

async clickContinueTo RegisterPage(){
    await this.page.click("#input-Continue")
}


)