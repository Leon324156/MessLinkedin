import fs from 'fs';
import { Apollo } from "./getlist.js";
export async function mailsToFile(Key) {
    const apollo = new Apollo(Key);
    try {
        const emaile = await apollo.getEmails();
        fs.writeFileSync('maile.txt', emaile.join('\n'));
        console.log('mails saves to file maile.txt');
    }
    catch (error) {
        console.error('error:', error);
    }
}
export async function linkedinToFile(Key) {
    const apollo = new Apollo(Key);
    try {
        const linkedinUrls = await apollo.getLinkedInUrls();
        fs.writeFileSync('linkedin.txt', linkedinUrls.join('\n'));
        console.log('linkedin urls saved to linkedin.txt');
    }
    catch (error) {
        console.error('error:', error);
    }
}
export async function getUrls(apiKey) {
    const apollo = new Apollo(apiKey);
    const linkedInUrls = await apollo.getLinkedInUrls();
    return linkedInUrls;
}
export function readUrlsFromFile(filename) {
    const data = fs.readFileSync(filename, 'utf-8');
    const urls = data.split('\n');
    return urls;
}
//# sourceMappingURL=dataToFile.js.map