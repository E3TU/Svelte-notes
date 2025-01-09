import { Client, Account } from "appwrite";

const projectId = import.meta.env.VITE_PROJECT_ID;

export const client = new Client();

client
    .setEndpoint("http://localhost:/v1")
    .setProject(projectId);

export const account = new Account(client);
export { ID } from "appwrite";