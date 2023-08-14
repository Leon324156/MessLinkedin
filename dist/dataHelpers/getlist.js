import axios from 'axios';
export class Apollo {
    constructor(apiKey) {
        this.taskSearchUrl = 'https://api.apollo.io/v1/tasks/search';
        this.apiKey = apiKey;
    }
    async GetLastask() {
        const payload = {
            api_key: this.apiKey,
            priority: ["high"],
            per_page: 3,
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
}
//# sourceMappingURL=getlist.js.map