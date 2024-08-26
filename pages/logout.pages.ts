
import { Page, expect } from '@playwright/test';

export class LogOut {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async logout() {
        await this.page.getByRole('link', { name: ' My Account' }).click();
        await this.page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();

    
        await this.page.waitForNavigation({ waitUntil: 'networkidle' }); 
    }

    async navigateToLogin() {
    
        const loginLink = this.page.getByRole('link', { name: ' Login' });
        await expect(loginLink).toBeVisible();  
        await loginLink.click();
    }
}
