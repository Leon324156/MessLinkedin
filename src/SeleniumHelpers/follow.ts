
import { FollowL } from "../SeleniumLocators/FollowL.js";
import { waitForElement } from "./htmlHelper.js";


// export async function followAndConnect(driver: any, url: string): Promise<void> {
//     await driver.get(`${url}`);
//     await driver.sleep(2000);

//     const button = await driver.findElement(By.css("div[class='pv-top-card-v2-ctas ']>div>button"));

   
//     const buttonText = await button.getText();
//     console.log(buttonText)

//         if (buttonText === "Follow") {
//             await button.click();
//             await driver.navigate().refresh();
           
//             const connect = await waitForElement(driver, "div[class='pv-top-card-v2-ctas ']>div>button", 10000);
//             await connect.click()
//             const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//                         messagebutton.click()
//                         const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 10000);
            
//                         await messageInput.sendKeys("321"); 
//                         const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//             return;

//         } else if (buttonText === "Connect") {
//             await button.click();
//             console.log("Kliknięto przycisk Connect");
//             const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//                         messagebutton.click()
//                         const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 10000);
            
//                         await messageInput.sendKeys("321"); 
//                         const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//             return; // Zakończ funkcję po kliknięciu "Connect"
//         }
        
//     console.log("Nie znaleziono przycisku Follow ani Connect");
//     }

 


// export async function followAndConnect(driver: any, url: string): Promise<void> {
//     await driver.get(`${url}`);
//     await driver.sleep(2000);

//     try {
//         const button = await driver.findElement(By.css("div[class='pv-top-card-v2-ctas ']>div>button"));
//         const buttonText = await button.getText();
//         console.log(buttonText);

//         if (buttonText === "Follow") {
//             await button.click();
//             await driver.navigate().refresh();
           
//             const connect = await waitForElement(driver, "div[class='pv-top-card-v2-ctas ']>div>button", 2000);
//             await connect.click();

//             const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//             messagebutton.click();

//             const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 2000);
//             await messageInput.sendKeys("321");

//             const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//             await driver.navigate().refresh();
//             return;

//         } else if (buttonText === "Connect") {
//             await button.click();
//             console.log("Kliknięto przycisk Connect");

//             const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//             messagebutton.click();

//             const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 2000);
//             await messageInput.sendKeys("321");

//             const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//             await driver.navigate().refresh();
//             return; 
//         }
        
//         console.log("Nie znaleziono przycisku Follow ani Connect");
//     } catch (error) {
//         if (error.name === "NoSuchElementError") {
//             console.log("Nie znaleziono elementu:", error.message);
//         } else {
//             console.log("Wystąpił błąd podczas szukania elementu:", error);
//         }
        
//     }
// }

// export async function Connect(driver: any, url: string): Promise<void> {
//         await driver.get(`${url}`);
//         await driver.sleep(2000);
    
//         try {
//             const button = await waitForElement(driver,"div[class='pv-top-card-v2-ctas ']>div>button",2000);
//             const buttonText = await button.getText();
//             if (buttonText === "Connect")
//             {
//               await button.click()
//               const messagebutton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)", 10000);
//             messagebutton.click();

//             const messageInput = await waitForElement(driver, "div[class='relative']>textarea", 2000);
//             await messageInput.sendKeys("321");

//              const sendButton = await waitForElement(driver, "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)", 10000);
//               await driver.navigate().refresh();
//               return;
//             }
//             else
//            {
//             const dropdown = await waitForElement(driver,"div[class='pv-top-card-v2-ctas ']>div>div>button[aria-label='More actions']",2000);
//             await dropdown.click()
//             const connect = await waitForElement(driver,"(//div[@class='artdeco-dropdown__content-inner']//span[text()='Connect'])[2]",2000)
//             // await connect.click()
//             await driver.navigate().refresh();
            
//            }
            
//         } catch (error) {
//             console.log('Nie znaleziono przycisku "Connect". Szukanie w innej lokalizacji...');
            
//         }
//     }


    // export async function Follow(driver: any, url: string): Promise<void> {
    //     await driver.get(`${url}`);
    //     await driver.sleep(2000);
    
    //     try {
    //         const button = await waitForElement(driver,"div[class='pv-top-card-v2-ctas ']>div>button",2000);
    //         const buttonText = await button.getText();
    //         if (buttonText === "Follow")
    //         {
    //         //   await button.click()
    //           await driver.navigate().refresh();
    //           return;
    //         }
    //         else
    //        {
    //         const dropdown = await waitForElement(driver,"div[class='pv-top-card-v2-ctas ']>div>div>button[aria-label='More actions']",2000);
    //         await dropdown.click()
    //         const follow = await waitForElement(driver,"(//div[@class='artdeco-dropdown__content-inner']//span[text()='Follow'])[2]",2000)
    //         // await follow.click()
    //         await driver.navigate().refresh();
    //     }
            
    //     } catch (error) {
    //         console.log("didnt find follow button")
            
    //     }
    // }


    export async function Follow(driver: any, url: string): Promise<void> {
        await driver.get(`${url}`);
    
        try {
            const button = await waitForElement(driver, FollowL.button, 2000);
            const buttonText = await button.getText();
            if (buttonText === "Follow") {
                // await button.click();
                await driver.navigate().refresh();
                return;
            } else {
                const dropdown = await waitForElement(driver, FollowL.dropdown, 2000);
                await dropdown.click();
                const follow = await waitForElement(driver, FollowL.follow, 2000);
                // await follow.click();
                await driver.navigate().refresh();
            }
    
        } catch (error) {
            console.log("Cannot find 'follow' button");
        }
    }


