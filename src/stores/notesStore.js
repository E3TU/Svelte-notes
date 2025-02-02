import { writable } from "svelte/store";

//Declare writable stores
export let notes = writable([]);
export let note = writable({});
export let title = writable("");
export let content = writable("");
// Declare variable for note id
let noteId = 1;

// Function to add notes
export function addNote(noteTitle, noteContent) {
  notes.update((currentNotes) => {
    const newNote = {
      id: noteId++,
      title: noteTitle,
      content: noteContent,
      Created: Date.now(),
    };
    return [...currentNotes, newNote];
  });
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