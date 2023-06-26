import { until,By } from 'selenium-webdriver';
import { waitForElement } from "./htmlHelper.js";



// export async function follow(driver: any, url: string): Promise<void> {
//     await driver.get(`${url}`);
//     await driver.sleep(2000)
    
//     try {
//         console.log("HUUUUUUJ")
//         const connect = await waitForElement(driver,"//div[@class='pv-top-card-v2-ctas ']//button//span[text()='Connect']",10000)
//         const follow = await waitForElement(driver,"//div[@class='pv-top-card-v2-ctas ']//button//span[text()='Follow']",10000)
//                 // await driver.sleep(2000)
//                 // const connect  = await driver.findElement(By.xpath("//div[@class='pv-top-card-v2-ctas ']//button//span[text()='Connect']"))
//                 // const follow  = await driver.findElement(By.xpath("//div[@class='pv-top-card-v2-ctas ']//button//span[text()='Follow']"))
//                 console.log("follow",follow)
//                 console.log("follow")
//         // const follow = await waitForElement(driver,"//div[@class='pv-top-card-v2-ctas ']//button//span[text()='Follow']",10000)

//         if (follow) {
//             await follow.click();
//             console.log(123)
//         } else if (connect) {
//             await connect.click();
//             console.log(321)

//             // Add custom message and send connection request
//             const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//             messagebutton.click()
//             const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 10000);
//             if (messageInput) {
//                 await messageInput.sendKeys("321"); // Dodaj tutaj własną niestandardową wiadomość
//                 const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//                 if (sendButton) {
//                     // await sendButton.click();
//                 }
//             }
//         } else {
//             console.log("Nie znaleziono przycisku Follow ani Connect");
//         }

//     } catch (error) {
//         console.log("Element nie został znaleziony");
//     }
 
//   }


  //div[@class="pv-top-card-v2-ctas "]//button//span[text()="Connect"]



//   export async function follow(driver: any, url: string): Promise<void> {
//         await driver.get(`${url}`);
//         await driver.sleep(2000)
        
//         try {
//             const follow = await waitForElement(driver,"div[class='pv-top-card-v2-ctas ']>div>button",10000)
//             await follow.click();
//             const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//             messagebutton.click()
//             const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 10000);

//             await messageInput.sendKeys("321"); // Dodaj tutaj własną niestandardową wiadomość
//             const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//               } 
//         catch (error) {
//         console.log("Follow");

//          }            

//         }



export async function followAndConnect(driver: any, url: string): Promise<void> {
    await driver.get(`${url}`);
    await driver.sleep(2000);

    const button = await driver.findElement(By.css("div[class='pv-top-card-v2-ctas ']>div>button"));

   
    const buttonText = await button.getText();
    console.log(buttonText)

        if (buttonText === "Follow") {
            await button.click();
            await driver.navigate().refresh();
           
            const connect = await waitForElement(driver, "div[class='pv-top-card-v2-ctas ']>div>button", 10000);
            await connect.click()
            const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
                        messagebutton.click()
                        const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 10000);
            
                        await messageInput.sendKeys("321"); 
                        const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
            return;

        } else if (buttonText === "Connect") {
            await button.click();
            console.log("Kliknięto przycisk Connect");
            const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
                        messagebutton.click()
                        const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 10000);
            
                        await messageInput.sendKeys("321"); 
                        const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
            return; // Zakończ funkcję po kliknięciu "Connect"
        }
        
    console.log("Nie znaleziono przycisku Follow ani Connect");
    }

 
