import { Builder } from 'selenium-webdriver';
import { follow } from './SeleniumHelpers/follow.js';
import { sendMessage } from './SeleniumHelpers/mess.js';
import { postliker } from './SeleniumHelpers/likepost.js';
import fs from 'fs';
// mailsToFile()
// linkedinToFile()
let driver = await new Builder().forBrowser('chrome').build();
await driver.manage().window().maximize();
await loadCookiesAndVisitPage();
// await logintoLinkdin(driver)
await driver.sleep(15000);
await follow(driver, "kacper-w/");
await postliker(driver);
await sendMessage(driver, "kacper-w/", "testujemy");
await driver.quit();
async function loadCookiesAndVisitPage() {
    try {
        // Otwórz stronę
        await driver.get('https://www.linkedin.com/login');
        const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
        console.log(cookies);
        // Dodaj ciasteczka
        for (let cookie of cookies) {
            await driver.manage().addCookie(cookie);
            console.log("jeden");
        }
        // Odśwież stronę
        await driver.navigate().refresh();
    }
    catch (err) {
        console.log(err);
    }
}
//# sourceMappingURL=index.js.map