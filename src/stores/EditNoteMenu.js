//Store to open and close note editing modal

import { writable } from "svelte/store";

// Note editing menu is closed as default
export const isEditNoteMenuOpen = writable(false);
export const selectedNoteId = writable(null);

// Function to open the note editing menu
export function editNoteMenu(id) {
  selectedNoteId.set(id);
  isEditNoteMenuOpen.update((value) => !value);

//   selectedNoteId.subscribe((value) => {
//     console.log(value);
//   });
}
