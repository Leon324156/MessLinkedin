import axios from 'axios';
export class Apollo {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = 'https://api.apollo.io/v1/tasks/search';
    }
    async getLinkedInUrls() {
        const payload = {
            api_key: this.apiKey,
            sort_by_field: "task_created_at",
            per_page: 200,
            open_factor_names: ["task_types"]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post(this.url, payload, { headers });
        const linkedinUrls = response.data.tasks.map(task => task.contact.linkedin_url);
        return linkedinUrls;
    }
    async getEmails() {
        const payload = {
            api_key: this.apiKey,
            sort_by_field: "task_created_at",
            per_page: 200,
            open_factor_names: ["task_types"]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post(this.url, payload, { headers });
        const emails = response.data.tasks.map(task => task.contact.email);
        return emails;
    }
}
//# sourceMappingURL=getlist.js.map