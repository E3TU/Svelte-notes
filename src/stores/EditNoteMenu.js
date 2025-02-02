import { writable } from 'svelte/store';

// Note editing menu is closed as default
export const isEditNoteMenuOpen = writable(false);

// Function to open the note editing menu
export function editNoteMenu() {
    isEditNoteMenuOpen.update(value => !value);
}