import { error, json } from "@sveltejs/kit";

import { createAdminClient } from "../../../lib/server/appwrite.js";
import { Databases, ID } from "appwrite";
// import { content, title } from "../../../stores/notesStore.js";

const databaseId = import.meta.env.VITE_DATABASE_ID;
// const collectionId = import.meta.env.VITE_COLLECTION_I

let collectionId;

export async function GET({ locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  //Logging collection id to make sure it gives the correct id
  // console.log(collectionId);

  try {
    const fetchNotesResponse = await databases.listDocuments(
      databaseId,
      collectionId
    );

    return json({ documents: fetchNotesResponse.documents });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}

export async function POST({ request, locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  const data = await request.json();
  

  if (data.action === "firstcategoryid") {
    const firstcategoryId = data.firstId;

    collectionId = firstcategoryId;

    return json({ firstcategoryId });
  }
  if (data.action === "updatedcategoryid") {
    const updatedcategoryId = data.updatedId;

    collectionId = updatedcategoryId;

    return json({ updatedcategoryId });
  }
  if (data.action === "newnote") {
    try {
      const noteId = ID.unique();

      // const { title, content } = await request.json();

      const test = data;
      const { title, content } = test;

      const saveNotesResponse = await databases.createDocument(
        databaseId,
        collectionId,
        noteId,
        // noteData,
        { title, content, }
      );
      return json(saveNotesResponse);
    } catch (error) {
      console.error(error);
      return json({ error: "Failed to save note" }, { status: 500 });
    }
  }

  // try {
  //   // const noteData = get(newNote);
  //   const noteId = ID.unique();

  //   const { title, content } = await request.json();

  //   const saveNotesResponse = await databases.createDocument(
  //     databaseId,
  //     collectionId,
  //     noteId,
  //     // noteData,
  //     { title, content, Created: Date.now() }
  //   );
  //   return json(saveNotesResponse);
  // } catch (error) {
  //   console.error(error);
  //   return json({ error: "Failed to save note" }, { status: 500 });
  // }
}

export async function PATCH({ request, locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  const body = await request.json();
  const { updatedFields } = body;

  // Build object that contains note title and note content but leave out empty values
  const dataToUpdate = {};
  if (updatedFields.title?.trim()) dataToUpdate.title = updatedFields.title;
  if (updatedFields.content.trim())
    dataToUpdate.content = updatedFields.content;

  try {
    const editNote = await databases.updateDocument(
      databaseId,
      collectionId,
      updatedFields.id,
      dataToUpdate
    );
    return json(editNote);
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to edit note" }, { status: 500 });
  }
}

export async function DELETE({ request, locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing document id" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deleteNote = databases.deleteDocument(databaseId, collectionId, id);
    await deleteNote;
    return new json({ success: "Note deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to delete note" }, { status: 500 });
  }
}
