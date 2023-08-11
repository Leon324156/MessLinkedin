import { Builder } from 'selenium-webdriver';
import dotenv from 'dotenv';
import { loadCookiesAndVisitPage } from './SeleniumHelpers/CookiesHelper.js';
import { Apollo } from './dataHelpers/getlist.js';
import { getmess, sendMessage } from './SeleniumHelpers/sendMess.js';
// export const handler = async (event: ScheduledEvent, context: Context): Promise<void> => {
//     console.log('Received event:', JSON.stringify(event, null, 2));
dotenv.config();
const AppoloApi = process.env.API_KEY;
const apollo = new Apollo(AppoloApi);
var lastTask = await apollo.GetLastask();
if (lastTask == null) {
    throw new Error("no task was found");
}
// let options = new Options();
// options.addArguments('--no-sandbox');
// options.addArguments('--disable-dev-shm-usage');
// options.addArguments('--headless');
// options.addArguments('--disable-gpu');
// options.addArguments("--disable-dev-tools")
// options.addArguments("--no-zygote")
// options.addArguments("--single-process")
// options.setChromeBinaryPath( process.env.CHROME_EXECUTABLE_PATH); 
let driver = await new Builder().forBrowser('chrome').build();
// let chromedriverPath = process.env.CHROMEDRIVER_PATH
// let serviceBuilder = new ServiceBuilder(chromedriverPath);
// let driver = new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .setChromeService(serviceBuilder)
//     .build();
const message = await getmess();
await driver.manage().window().maximize();
await loadCookiesAndVisitPage(driver);
await sendMessage(driver, "https://www.linkedin.com/in/tomi-kamson-32520318b/", message);
await driver.quit();
console.log(lastTask.id);
// await apollo.TaskCompleted(lastTask.id);
// }
//# sourceMappingURL=index.js.map