import { DATABASE_ID, COLLECTION_ID } from "$env/static/public";


import { createSessionClient } from "$lib/appwrite";
import { Databases } from "appwrite";

const databaseId = DATABASE_ID;
const collectionId = COLLECTION_ID;


export async function get({ event }) {
    const { account } = createSessionClient(event);
    const databases = new Databases(account.client);

    try {
        const notes = await databases.listDocuments(databaseId, collectionId);
        console.log(notes);
    } catch(error) {
        console.error(error);
    }
}
