import { DATABASE_ID, COLLECTION_ID } from "$env/static/public";
import { notes } from "../../stores/notesStore";

import { createAdminClient } from "../server/appwrite";
import { Databases } from "appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

export async function fetchNotes({ event }) {
    const { account } = createAdminClient(event);
    const databases = new Databases(account.client);

    try {
        const fetchNotesResponse = await databases.listDocuments(databaseId, collectionId);
        console.log(fetchNotesResponse);
        return fetchNotesResponse;
    } catch(error) {
        console.error(error);
        return null;
    }
}

export async function saveNotes({ event }) {
    const { account } = createAdminClient(event)
    const databases = new Databases(account.client);

    try{
        const saveNotesResponse = databases.createDocument(
            databaseId,
            collectionId,
            "unique()",

        );
    } catch(error) {

    }
}
