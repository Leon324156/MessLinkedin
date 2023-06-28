import fs from 'fs';
import { Apollo } from "./getlist.js";

export async function mailsToFile(Key:string) {
    const apollo = new Apollo(Key); 
  
    try {
      const emaile = await apollo.getEmails(); 
  
      
      fs.writeFileSync('maile.txt', emaile.join('\n'));
      console.log('mails saves to file maile.txt');
    } catch (error) {
      console.error('error:', error);
    }
}

export async function linkedinToFile(Key:string) {
    const apollo = new Apollo(Key); 
  
    try {
      const linkedinUrls = await apollo.getLinkedInUrls(); 
  
      
      fs.writeFileSync('linkedin.txt', linkedinUrls.join('\n'));
      console.log('linkedin urls saved to linkedin.txt');
    } catch (error) {
      console.error('error:', error);
    }
}

export async function getUrls(apiKey: string): Promise<string[]> {
  const apollo = new Apollo(apiKey);
  const linkedInUrls = await apollo.getLinkedInUrls();
  return linkedInUrls;
}
