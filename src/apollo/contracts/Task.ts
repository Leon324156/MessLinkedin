export interface Contact {
    linkedin_url: string;
    email: string;
    organization_name:string
    first_name:string
}

export interface Task {
    contact: Contact;
    priority: string
    id:string
}