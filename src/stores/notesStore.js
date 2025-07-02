//Store that contains notes and keeps the notes up to date on UI side

import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

//Declare writable stores
export let notes = writable([]);
export let note = writable({});
export let title = writable("");
export let content = writable("");
export let newNote = writable({});

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

    const data = await res.json();

    const noteId = data.$id;

    console.log(data.$id);

    newNote.set = {
      id: noteId,
      title: noteTitle,
      content: noteContent,
      Created: Date.now(),
    };

    notes.update((currentNotes) => {
      // console.log(newNote);
      // console.log(noteTitle);
      // console.log(noteContent);
      return [
        ...currentNotes,
        { title: noteTitle, content: noteContent, Created: Date.now() },
      ];
    });

    if (!res.ok) {
      console.error("Save to appwrite failed:", data);
    }
  } catch (error) {
    console.error("Error saving note:", error);
  }
}

// Function to edit notes
export function editNote(id, newTitle, newContent) {
  notes.update((currentNotes) => {
    return currentNotes.map((note) => {
      if (note.id === id) {
        return { ...note, title: newTitle, content: newContent };
      }
      return note;
    });
  });
}

// Function to delete notes
export function deleteNote(id) {
  notes.update((currentNotes) => currentNotes.filter((note) => note.id !== id));
}
