import { error, json } from "@sveltejs/kit";

import { createAdminClient } from "../../../lib/server/appwrite.js";
import { Databases, ID } from "appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

const noteId = ID.unique();

export async function GET({ locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    const fetchNotesResponse = await databases.listDocuments(
      databaseId,
      collectionId
    );
    return new Response(
      JSON.stringify({ documents: fetchNotesResponse.documents }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}

export async function POST({ request, locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    // const noteData = get(newNote);

    const { title, content } = await request.json();

    const saveNotesResponse = await databases.createDocument(
      databaseId,
      collectionId,
      noteId,
      // noteData,
      { title, content, Created: Date.now() }
    );
    return json(saveNotesResponse);
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to save note" }, { status: 500 });
  }
}

export async function DELETE({ request, locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    const deleteNote = databases.deleteDocument(databaseId, collectionId, noteId);
    await deleteNote;
    return new json({success: "Note deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to delete note" }, { status: 500 });
  }
}
