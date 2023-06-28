import { ConnectL } from "../SeleniumLocators/ConnectL.js";
import { waitForElement } from "./htmlHelper.js";
export async function Connect(driver, url, mess) {
    await driver.get(`${url}`);
    try {
        const button = await waitForElement(driver, ConnectL.button, 2000);
        const buttonText = await button.getText();
        if (buttonText === "Connect") {
            await button.click();
            const messagebutton = await waitForElement(driver, ConnectL.messageButton, 10000);
            messagebutton.click();
            const messageInput = await waitForElement(driver, ConnectL.messageInput, 2000);
            await messageInput.sendKeys(mess);
            const sendButton = await waitForElement(driver, ConnectL.sendButton, 10000);
            await driver.navigate().refresh();
            return;
        }
        else {
            const dropdown = await waitForElement(driver, ConnectL.dropdown, 2000);
            await dropdown.click();
            const connect = await waitForElement(driver, ConnectL.connect, 2000);
            // await connect.click();
            await driver.navigate().refresh();
        }
    }
    catch (error) {
        console.log('Cannot find connect button');
    }
}
//# sourceMappingURL=Connect.js.map