import { FollowL } from "../SeleniumLocators/FollowL.js";
import { waitForElement } from "./htmlHelper.js";
export async function Follow(driver, url) {
    await driver.get(`${url}`);
    try {
        const button = await waitForElement(driver, FollowL.button, 2000);
        const buttonText = await button.getText();
        if (buttonText === "Follow") {
            // await button.click();
            await driver.navigate().refresh();
            return;
        }
        else {
            const dropdown = await waitForElement(driver, FollowL.dropdown, 2000);
            await dropdown.click();
            const follow = await waitForElement(driver, FollowL.follow, 2000);
            // await follow.click();
            await driver.navigate().refresh();
        }
    }
    catch (error) {
        console.log("Cannot find 'follow' button");
    }
}
//# sourceMappingURL=follow.js.map