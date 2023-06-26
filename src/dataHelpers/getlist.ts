import axios, { AxiosResponse } from 'axios';

interface Contact {
    linkedin_url: string;
    email: string;
}

interface Task {
    contact: Contact;
}

interface ResponseData {
    tasks: Task[];
}

export class Apollo {
    apiKey: string;
    url: string;
  
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.url = 'https://api.apollo.io/v1/tasks/search';
    }
  
    async getLinkedInUrls(): Promise<string[]> {
        const payload = {
            api_key: this.apiKey,
            sort_by_field: "task_created_at",
            per_page: 200,
            open_factor_names: ["task_types"]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response: AxiosResponse<ResponseData> = await axios.post(this.url, payload, { headers });
        const linkedinUrls = response.data.tasks.map(task => task.contact.linkedin_url);
        return linkedinUrls;
    }
  
    async getEmails(): Promise<string[]> {
        const payload = {
            api_key: this.apiKey,
            sort_by_field: "task_created_at",
            per_page: 200,
            open_factor_names: ["task_types"]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response: AxiosResponse<ResponseData> = await axios.post(this.url, payload, { headers });
        const emails = response.data.tasks.map(task => task.contact.email);
        return emails;
    }
}
