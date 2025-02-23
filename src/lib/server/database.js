import { DATABASE_ID, COLLECTION_ID } from "$env/static/public";

import { createAdminClient } from "../server/appwrite";
import { Databases } from "appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

export async function fetchDocuments({ event }) {
    const { account } = createAdminClient(event);
    const databases = new Databases(account.client);

    try {
        const notes = await databases.listDocuments(databaseId, collectionId);
        console.log(notes);
        return notes;
    } catch(error) {
        console.error(error);
        return null;
    }
}
