import { Builder, By, Key, until,WebDriver } from 'selenium-webdriver';
import { waitForElement } from './htmlHelper.js';

export async function sendMessage(driver: WebDriver,url:string,message: string) {
        try{

        
        await driver.get(`${url}`);
        const mess = await waitForElement(driver,"div[class='entry-point pvs-profile-actions__action']",10000)
        await mess.click();

        const title = await waitForElement(driver,"input[class=' artdeco-text-input--input']",10000)
        await  title.click()
        await  title.sendKeys("test");
  
        const messcontent = await waitForElement(driver,".msg-form__contenteditable",10000)
        await  messcontent.click()
        await messcontent.sendKeys(message)
        
        // await driver.findElement(By.css('.msg-form__send-button')).click();
    }
    catch(error)
    {
     console.log("error in send mess")
    }
    

}
