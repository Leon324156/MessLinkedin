import { WebDriver,By, Button, Key } from 'selenium-webdriver';
import { waitForElement } from './htmlHelper.js';
import { sm } from '../SeleniumLocators/messL.js';
import { Apollo } from "../dataHelpers/getlist.js";
import dotenv from 'dotenv';
export async function sendMessage(driver: WebDriver,url:string,message: string) {
    try {
        await driver.get(`${url}`);

        if (await connectCheck(driver,sm.button)) {
            return;
        }
    
        const icon = await waitForElement(driver, sm.icon, 2000);
        const lockicon = await icon.getAttribute('type');
                
        if (lockicon !== 'locked') {
            console.log("mess open")
            const mess = await waitForElement(driver, sm.mess, 2000);
            await mess.click();
            if (await MessageCheck(driver, sm.checkmess)) {
                return;
            }
            const messcontent = await waitForElement(driver, sm.messcontent, 2000);
            await messcontent.click();
            await messcontent.sendKeys(message, Key.ENTER);
            await driver.sleep(3000)
        }
    } catch (error) {
        console.log(error);
    }
}



export async function getmess(): Promise<string> {

    dotenv.config();
    const AppoloApi = process.env.API_KEY
    const apollo = new Apollo(AppoloApi);
    var lastTask = await apollo.GetLastask();
    const mess = `Hi ${lastTask.contact.first_name},
    It might be your lucky day to grow your tech team in ${lastTask.contact.organization_name}.
    We help companies like ${lastTask.contact.organization_name} to scale up and down their software teams quickly.
    Let me know if this is something we can help you with.
    
    Best,
    Kacper`
    return mess
    }



    async function connectCheck(driver, button: string): Promise<boolean> {
        try {
            const Button = await waitForElement(driver, button, 2000);
            if (Button) {
                console.log('Not connected');
                return true; 
            }
        } catch (error) {
            console.log('Connected');
            return false; 
        }
    }
    

    async function MessageCheck(driver, messageL: string): Promise<boolean> {
        try {
            const message = await waitForElement(driver, messageL, 2000);
            if (messageL) {
                console.log('User already send mess to us');
                return true; 
            }
        } catch (error) {
            console.log('We can send mess, no message from user');
            return false; 
        }
    }