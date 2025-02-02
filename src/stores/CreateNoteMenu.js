import { writable } from 'svelte/store';

export const isCreateNoteMenuOpen = writable(false);

export function createNoteMenu() {
    isCreateNoteMenuOpen.update(value => !value);
}