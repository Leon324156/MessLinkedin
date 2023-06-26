import { By, until } from 'selenium-webdriver';
export async function waitForElement(driver, selector, timeout) {
    const locator = By.css(selector);
    try {
        await driver.wait(until.elementLocated(locator), timeout);
        const element = await driver.findElement(locator);
        return element;
    }
    catch (error) {
        const xpathLocator = By.xpath(selector);
        await driver.wait(until.elementLocated(xpathLocator), timeout);
        const element = await driver.findElement(xpathLocator);
        return element;
    }
}
//# sourceMappingURL=wait.js.map