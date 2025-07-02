//Store to open and close note creation modal

import { writable } from 'svelte/store';

// Note creation menu is closed as default
export const isCreateNoteMenuOpen = writable(false);

// Function to open the note creation menu
export function createNoteMenu() {
    isCreateNoteMenuOpen.update(value => !value);
}