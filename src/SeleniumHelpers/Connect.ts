import { ConnectL } from "../SeleniumLocators/ConnectL.js";
import { Apollo } from "../dataHelpers/getlist.js";
import { waitForElement } from "./htmlHelper.js";
import dotenv from 'dotenv';
export async function Connect(driver: any, url: string, mess: string): Promise<void> {

  await driver.get(`${url}`);

  try {
      const button = await waitForElement(driver, ConnectL.button, 2000);
      const buttonText = await button.getText();
      console.log(buttonText,"buttontext")
      if (buttonText === "Connect") {
          await button.click();
          const messagebutton = await waitForElement(driver, ConnectL.messageButton, 10000);
          messagebutton.click();

          const messageInput = await waitForElement(driver, ConnectL.messageInput, 2000);
          await messageInput.sendKeys(mess);

          const sendButton = await waitForElement(driver, ConnectL.sendButton, 10000);
          
          await sendButton.click()
          await driver.navigate().refresh();
          console.log("Connect successful")
          return;
      } else {
          const dropdown = await waitForElement(driver, ConnectL.dropdown, 2000);
          await dropdown.click();
          const connect = await waitForElement(driver, ConnectL.connect, 2000);
          await connect.click();
          
          const messagebutton = await waitForElement(driver, ConnectL.messageButton, 10000);
          await messagebutton.click();

          const messageInput = await waitForElement(driver, ConnectL.messageInput, 2000);
          await messageInput.sendKeys(mess);
          const sendButton = await waitForElement(driver, ConnectL.sendButton, 10000);
          await sendButton.click()
          
          await driver.navigate().refresh();
          console.log("Connect successful")
      }

  } catch (error) {
      console.log('Cannot find connect button');
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