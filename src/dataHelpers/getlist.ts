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
  
  

    async GetLastask(): Promise<Task> {
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
        const response: AxiosResponse<ResponseData> = await axios.post(this.taskSearchUrl, payload, { headers });
        const priorities = response.data.tasks.filter(task => task.priority === "high")[0];
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
    
}
