//Store that contains notes and keeps the notes up to date on UI side

import { writable } from "svelte/store";

//Declare writable stores
export let notes = writable([]);
export let title = writable("");
export let content = writable("");

export let documents = writable([]);

export async function fetchNotes() {
  const res = await fetch("api/notes");
  const data = await res.json();
  documents.set(data.documents);

  // documents.subscribe(value => {
  //   console.log(value);
  // });
}

// Function to add notes
export async function addNote(noteTitle, noteContent) {
  // Add the note to UI
  // const newId = uuidv4();

  // Save the note to database
  try {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: noteTitle,
        content: noteContent,
      }),
    });

    // const data = await res.json();

    // const noteId = data.$id;

    // console.log(data.$id);

    await fetchNotes();

    if (!res.ok) {
      console.error("Save to appwrite failed:", data);
    }
  } catch (error) {
    console.error("Error saving note:", error);
  }
}

// Function to edit notes
export async function editNote(id) {
  const res = await fetch("/api/notes", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();

}

// Function to delete notes
export async function deleteNote(id) {
  // notes.update((currentNotes) => currentNotes.filter((note) => note.id !== id));
  console.log("Deleteing note id with:", id);

  const res = await fetch("/api/notes", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();
  console.log(data);

  fetchNotes();
}
