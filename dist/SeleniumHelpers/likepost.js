import { postlikerL } from '../SeleniumLocators/LikepostL.js';
import { scrollToElement, waitForElement } from './htmlHelper.js';
export async function postliker(driver) {
    try {
        const post = await waitForElement(driver, postlikerL.post, 3000);
        await scrollToElement(driver, post);
        await post.click();
        const like = await waitForElement(driver, postlikerL.like, 2000);
        await scrollToElement(driver, like);
        // await like.click();
    }
    catch (error) {
        console.log("Element not find");
    }
}
//# sourceMappingURL=likepost.js.map