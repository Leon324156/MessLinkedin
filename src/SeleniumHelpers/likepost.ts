import {  By, Key} from 'selenium-webdriver';
import { scrollToElement, waitForElement } from './htmlHelper.js';

export async function postliker(driver:any) {
   try{

  
    const post = waitForElement(driver,"ul[class='display-flex flex-wrap list-style-none justify-space-between']>li[class='profile-creator-shared-feed-update__mini-container']:nth-child(1)",10000)
    await driver.executeScript('arguments[0].scrollIntoView(true);', post);
    await (await post).click()
    const like = waitForElement(driver,"span[class='reactions-react-button feed-shared-social-action-bar__action-button']",10000)
    await driver.executeScript('arguments[0].scrollIntoView(true);', like);
    // await (await like).click()
   }
   catch (error)
   {
      console.log("element nie znaleziony")
   }
  }



//   div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)  dodaj notatke
//   div[class='relative']>textarea textarea
//   div[class="artdeco-modal__actionbar ember-view text-align-right"]>button:nth-child(2) wyślij

  


