import { writable } from "svelte/store";

export let notes = writable([]);
export let title = writable("");
export let content = writable("");
let noteId = 1;


export function addNote(noteTitle, noteContent) {
  notes.update((currentNotes) => {
    const note = {
      id: noteId++,
      title: noteTitle,
      content: noteContent,
      Created: Date.now(),
    };
    return [...currentNotes, note]
    // notes.update((currentNotes) => [...currentNotes, note]);
  });
}

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

export function deleteNote(id) {
  //   notes = notes.filter((note) => note.id !== id);
    notes.update((currentNotes) => currentNotes.filter((note) => note.id !== id));
    // console.log(notes);
  }
