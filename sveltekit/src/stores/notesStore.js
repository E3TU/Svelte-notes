import { writable } from "svelte/store";

// export let test = writable("Kurwa");

export let notes = writable([]);
let noteId = 1;

export function addNote() {
  const note = {
    id: noteId++,
    title: "Test",
    content: "test",
    Created: Date.now(),
  };

//   notes = [...notes, note];
    notes.update((currentNotes) => [...currentNotes, note]);
  console.log(notes);
}

export function deleteNote(id) {
//   notes = notes.filter((note) => note.id !== id);
    notes.update((currentNotes) => currentNotes.filter((note) => note.id !== id));
  console.log(notes);
}