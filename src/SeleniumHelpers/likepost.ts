import {  By, Key} from 'selenium-webdriver';
import { scrollToElement, waitForElement } from './htmlHelper.js';

export async function postliker(driver:any) {
   try{

  
    const post = await waitForElement(driver,"ul[class='display-flex flex-wrap list-style-none justify-space-between']>li[class='profile-creator-shared-feed-update__mini-container']:nth-child(1)",10000)
    scrollToElement(driver,post)
    await post.click()
    const like = await waitForElement(driver,"span[class='reactions-react-button feed-shared-social-action-bar__action-button']",10000)
    scrollToElement(driver,like)
    // await like.click()
   }
   catch (error)
   {
      console.log("element nie znaleziony")
   }
  }


