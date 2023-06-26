import { Key } from 'selenium-webdriver';
import { waitForElement } from './htmlHelper.js';
export async function logintoLinkdin(driver) {
    await driver.get('https://www.linkedin.com/login');
    const login = waitForElement(driver, "input[id='username']", 10000);
    await (await login).sendKeys('leon+test@staffbit.co.uk');
    const password = waitForElement(driver, "input[id='password']", 10000);
    await (await password).sendKeys('Pamelo14', Key.RETURN);
}
//# sourceMappingURL=Login.js.map