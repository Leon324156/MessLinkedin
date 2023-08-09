import axios, { AxiosResponse } from 'axios';
import {Task, Contact} from '../apollo/contracts/Task.js';

interface ResponseData {
    tasks: Task[];
    task: Task;
}

export class Apollo {
    private apiKey: string;
    private taskSearchUrl: string = 'https://api.apollo.io/v1/tasks/search';
  
    constructor(apiKey: string) {
        this.apiKey = apiKey;
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
        const response: AxiosResponse<ResponseData> = await axios.post(this.taskSearchUrl, payload, { headers });
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
        const response: AxiosResponse<ResponseData> = await axios.post(this.taskSearchUrl, payload, { headers });
        const emails = response.data.tasks.map(task => task.contact.email);
        return emails;
    }

    async GetLastask(): Promise<Task> {
        const payload = {
            api_key: this.apiKey,
            priority: ["medium"],
            per_page: 190,
            open_factor_names: [
                "task_types"
            ]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response: AxiosResponse<ResponseData> = await axios.post(this.taskSearchUrl, payload, { headers });
        const priorities = response.data.tasks.filter(task => task.priority === "medium")[0];
        return priorities;
    }
    async TaskCompleted(taskid:string): Promise<void> {
        const payload = {
            api_key: this.apiKey,
            
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const url = `https://api.apollo.io/v1/tasks/${taskid}/complete`
        await axios.post(url, payload, { headers });
    }
    async TaskPriorityChange(taskid:string): Promise<void> {
        const payload = {
            api_key: this.apiKey,
            priority: "high"
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const url = `https://api.apollo.io/v1/tasks/${taskid}`
        await axios.put(url, payload, { headers });
    }
    
    
    
    async getTaskId(lasttask:Task): Promise<string>
    {
        return lasttask.id
    }


    async getTaskurl(lasttask:Task): Promise<string>
    {
        return  lasttask.contact.linkedin_url
    }

    async getFirstName(lasttask:Task): Promise<string>
    {
        return  lasttask.contact.first_name
    }

    async getOrganizationName(lasttask:Task): Promise<string>
    {
        return  lasttask.contact.organization_name
    }
}
