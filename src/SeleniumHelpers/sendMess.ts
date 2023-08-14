import { WebDriver, Key } from 'selenium-webdriver';;
import { waitForCSS } from './htmlHelper.js';
export async function composeInviteMessage(driver: WebDriver, url: string, message: string) {
    const sm = {
        icon: "div[class='entry-point pvs-profile-actions__action']>button>li-icon",
        mess: "div[class='entry-point pvs-profile-actions__action']",
        checkmess: "div[class*='msg-s-event-listitem' ][tabindex]",
        messcontent: "div[class*='msg-form__msg-content-container']>div>div[role='textbox']",
        button: "div[class='pv-top-card-v2-ctas ']>div>button",
        sendbutton : "footer[class*='msg-form__footer']>div>div>button[class*='msg-form__send-button']"
    };

    try {
        await driver.get(`${url}`);

        if (await connectCheck(driver, sm.button)) {
            return;
        }

        const icon = await waitForCSS(driver, sm.icon, 2000);
        const lockicon = await icon.getAttribute('type');

        if (lockicon !== 'locked') {
            console.log("Message open");
            const mess = await waitForCSS(driver, sm.mess, 2000);
            await mess.click();
            if (await MessageCheck(driver, sm.checkmess)) {
                return;
            }
            const messcontent = await waitForCSS(driver, sm.messcontent, 2000);

            await messcontent.click();
            
            await messcontent.clear();
            await messcontent.sendKeys(message);
            await driver.sleep(1000)
            const send = await waitForCSS(driver, sm.sendbutton, 2000);
            await send.click()
            console.log("Message sent successfull")
        }
    } catch (error) {
        console.log(error);
    }
}


export async function getmess(firstname:string,organization_name:string): Promise<string> {

    const mess = `Hi ${firstname},\n` +
    `It might be your lucky day to grow your tech team in ${organization_name}.\n` +
    `We help companies like ${organization_name} to scale up and down their software teams quickly.\n` +
    `Let me know if this is something we can help you with.\n\n` +
    `Best,\n` +
    `Kacper`;
    return mess
    }



    async function connectCheck(driver, button: string): Promise<boolean> {
        try {
            const Button = await waitForCSS(driver, button, 2000);
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
            const message = await waitForCSS(driver, messageL, 2000);
            if (messageL) {
                console.log('User already send mess to us');
                return true; 
            }
        } catch (error) {
            console.log('We can send mess, no message from user');
            return false; 
        }
    }
