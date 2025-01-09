import { Client, Account } from "appwrite";
import 'dotenv/config'

const projectId = process.env.PROEJECT_ID;

export const client = new Client();

client
    .setEndpoint("http://localhost:/v1")
    .setProject(projectId);

export const account = new Account(client);
export { ID } from "appwrite";