import { Builder,} from 'selenium-webdriver';
import dotenv from 'dotenv';
import { getUrls, linkedinToFile, mailsToFile } from "./dataHelpers/dataToFile.js";
import { sendMessage } from './SeleniumHelpers/mess.js';
import { postliker } from './SeleniumHelpers/likepost.js';
import { loadCookiesAndVisitPage } from './SeleniumHelpers/CookiesHelper.js';
import { Follow } from './SeleniumHelpers/follow.js';
import { Connect } from './SeleniumHelpers/Connect.js';
dotenv.config();
const AppoloApi = process.env.API_KEY

const urls = await getUrls(AppoloApi);
let driver = await new Builder().forBrowser('chrome').build();
await driver.manage().window().maximize();
await loadCookiesAndVisitPage(driver)

for (const url of urls) {
    await Follow(driver,url)
    await Connect(driver,url,"Cześć")
    await postliker(driver)
    await sendMessage(driver,url,"cześć","cześć")
    
}

await driver.quit();

mailsToFile(AppoloApi)
linkedinToFile(AppoloApi)


// await followAndConnect(driver,"https://www.linkedin.com/in/robinknox//")
// await postliker(driver)
// await sendMessage(driver, "https://www.linkedin.com/in/kacper-w/", "testujemy");
// await sendMessage(driver, "https://www.linkedin.com/in/robinknox/", "testujemy");
// await Follow(driver,"https://www.linkedin.com/in/natalia-k-ba989ba4/")
// await Connect(driver,"https://www.linkedin.com/in/natalia-k-ba989ba4/")


// // await driver.quit();










