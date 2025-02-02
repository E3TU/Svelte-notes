import { writable } from 'svelte/store';

export const isEditNoteMenuOpen = writable(false);

export function editNoteMenu() {
    isEditNoteMenuOpen.update(value => !value);
}