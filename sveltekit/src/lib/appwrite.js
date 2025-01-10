import { Client, Account } from "appwrite";

// Appwrite endpoint
const endpoint = "http://localhost:/v1";

// Appwrite project id
const projectId = import.meta.env.VITE_PROJECT_ID;

export const client = new Client();

client
    .setEndpoint(endpoint)
    .setProject(projectId);

export const account = new Account(client);
export { ID } from "appwrite";