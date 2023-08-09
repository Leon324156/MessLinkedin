import { waitForElement } from './htmlHelper.js';
import { sm } from '../SeleniumLocators/messL.js';
export async function sendMessage(driver, url, messagetit, message) {
    try {
        await driver.get(`${url}`);
        const icon = await waitForElement(driver, sm.icon, 2000);
        const lockicon = await icon.getAttribute('type');
        console.log(lockicon);
        if (lockicon !== 'locked') {
            const mess = await waitForElement(driver, sm.mess, 2000);
            await mess.click();
            const title = await waitForElement(driver, sm.title, 2000);
            await title.click();
            await title.sendKeys(messagetit);
            const messcontent = await waitForElement(driver, sm.messcontent, 2000);
            await messcontent.click();
            await messcontent.sendKeys(message);
            // const send = await waitForElement(driver,sm.send,1000)
            // await send.click()
        }
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=mess.js.map