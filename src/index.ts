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










