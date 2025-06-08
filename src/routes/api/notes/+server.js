import { DATABASE_ID, COLLECTION_ID } from "$env/static/public";
// import { newNote } from "../../stores/notesStore";
import { get } from "svelte/store";
import { json } from "@sveltejs/kit";

import { createAdminClient } from "../../../lib/server/appwrite.js";
import { Databases } from "appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

export async function GET({ locals }) {
    const { account } = createAdminClient(locals);
    const databases = new Databases(account.client);

    try {
        const fetchNotesResponse = await databases.listDocuments(databaseId, collectionId);
        // console.log(fetchNotesResponse);
        return json(fetchNotesResponse);
    } catch(error) {
        console.error(error);
        return json({ error: "Failed to fetch notes"}, {status: 500});
    }
}

export async function POST({ request, locals }) {
    const { account } = createAdminClient(locals)
    const databases = new Databases(account.client);

    try{

        // const noteData = get(newNote);

        const { title, content } = await request.json();

        const saveNotesResponse = databases.createDocument(
            databaseId,
            collectionId,
            "unique()",
            // noteData,
            { title, content, Created: Date.now() }
        );
        // console.log(saveNotesResponse);
        return json(saveNotesResponse);
    } catch(error) {
        console.error(error);
        return json({ error: "Failed to save note" }, { status: 500 })
    }
}
