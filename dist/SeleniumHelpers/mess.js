import { waitForElement } from './htmlHelper.js';
export async function sendMessage(driver, url, message) {
    try {
        await driver.get(`${url}`);
        const mess = waitForElement(driver, "div[class='entry-point pvs-profile-actions__action']", 10000);
        await (await mess).click();
        const title = waitForElement(driver, "input[class=' artdeco-text-input--input']", 10000);
        await (await title).click();
        await (await title).sendKeys("test");
        const messcontent = waitForElement(driver, ".msg-form__contenteditable", 10000);
        await (await messcontent).click();
        await (await messcontent).sendKeys(message);
        // await driver.findElement(By.css('.msg-form__send-button')).click();
    }
    catch (error) {
        console.log("error in send mess");
    }
}
//# sourceMappingURL=mess.js.map