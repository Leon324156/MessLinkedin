import { Builder,} from 'selenium-webdriver';
import { getUrls, linkedinToFile, mailsToFile } from "./dataHelpers/dataToFile.js";
import { followAndConnect } from './SeleniumHelpers/follow.js';
import { sendMessage } from './SeleniumHelpers/mess.js';
import { postliker } from './SeleniumHelpers/likepost.js';
import { loadCookiesAndVisitPage } from './SeleniumHelpers/CookiesHelper.js';
import dotenv from 'dotenv';
dotenv.config();

// mailsToFile()
// linkedinToFile()
const AppoloApi = process.env.API_KEY
const urls = await getUrls(AppoloApi);

let driver = await new Builder().forBrowser('chrome').build();
await driver.manage().window().maximize();
await loadCookiesAndVisitPage(driver)

for (const url of urls) {
    await followAndConnect(driver, url);
    await postliker(driver);
    await sendMessage(driver, url, "testujemy");
}

// await followAndConnect(driver,"https://www.linkedin.com/in/anna-donetska-764015104/")
// await followAndConnect(driver,"https://www.linkedin.com/in/kacper-w/")

// await postliker(driver)
// await sendMessage(driver,"kacper-w/","testujemy")
// await driver.quit();










