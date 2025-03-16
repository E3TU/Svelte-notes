import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

//Declare writable stores
export let notes = writable([]);
export let note = writable({});
export let title = writable("");
export let content = writable("");
export let newNote = writable({});

// Function to add notes
export function addNote(noteTitle, noteContent) {
  const newId = uuidv4();


  newNote.set = {
    id: newId,
    title: noteTitle,
    content: noteContent,
    Created: Date.now(),
  };

  notes.update((currentNotes) => {
    
    // console.log(newNote);
    // console.log(noteTitle);
    // console.log(noteContent);
    return [...currentNotes, {id: newId, title: noteTitle, content: noteContent, Created: Date.now() }];
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