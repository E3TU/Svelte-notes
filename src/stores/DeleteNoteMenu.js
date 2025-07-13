import { writable } from 'svelte/store';

// Note deletion menu is closed as default
export const isDeleteNoteMenuOpen = writable(false);

// Function to open the note deletion menu
export function deleteNoteMenu() {
    isDeleteNoteMenuOpen.update(value => !value);
}