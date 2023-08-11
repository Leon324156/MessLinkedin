import axios from 'axios';
export class Apollo {
    constructor(apiKey) {
        this.taskSearchUrl = 'https://api.apollo.io/v1/tasks/search';
        this.apiKey = apiKey;
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
        const response = await axios.post(this.taskSearchUrl, payload, { headers });
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
        const response = await axios.post(this.taskSearchUrl, payload, { headers });
        const emails = response.data.tasks.map(task => task.contact.email);
        return emails;
    }
    async GetLastask() {
        const payload = {
            api_key: this.apiKey,
            priority: ["high"],
            per_page: 190,
            open_factor_names: [
                "task_types"
            ]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post(this.taskSearchUrl, payload, { headers });
        const priorities = response.data.tasks.filter(task => task.priority === "high")[0];
        return priorities;
    }
    async TaskCompleted(taskid) {
        const payload = {
            api_key: this.apiKey,
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const url = `https://api.apollo.io/v1/tasks/${taskid}/complete`;
        await axios.post(url, payload, { headers });
    }
    async TaskPriorityChange(taskid) {
        const payload = {
            api_key: this.apiKey,
            priority: "high"
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const url = `https://api.apollo.io/v1/tasks/${taskid}`;
        await axios.put(url, payload, { headers });
    }
    async getTaskId(lasttask) {
        return lasttask.id;
    }
    async getTaskurl(lasttask) {
        return lasttask.contact.linkedin_url;
    }
    async getFirstName(lasttask) {
        return lasttask.contact.first_name;
    }
    async getOrganizationName(lasttask) {
        return lasttask.contact.organization_name;
    }
}
//# sourceMappingURL=getlist.js.map