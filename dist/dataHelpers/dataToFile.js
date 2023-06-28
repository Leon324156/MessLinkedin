import fs from 'fs';
import { Apollo } from "./getlist.js";
export async function mailsToFile(Key) {
    const apollo = new Apollo(Key);
    try {
        const emaile = await apollo.getEmails();
        fs.writeFileSync('maile.txt', emaile.join('\n'));
        console.log('Maile zapisane do pliku maile.txt');
    }
    catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}
export async function linkedinToFile(Key) {
    const apollo = new Apollo(Key);
    try {
        const linkedinUrls = await apollo.getLinkedInUrls();
        fs.writeFileSync('linkedin.txt', linkedinUrls.join('\n'));
        console.log('URLi LinkedIn zapisane do pliku linkedin.txt');
    }
    catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}
export async function getUrls(apiKey) {
    const apollo = new Apollo(apiKey);
    const linkedInUrls = await apollo.getLinkedInUrls();
    return linkedInUrls;
}
//# sourceMappingURL=dataToFile.js.map