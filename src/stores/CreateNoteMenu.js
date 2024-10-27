import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);

export function createNoteMenu() {
    isMenuOpen.update(value => !value);
}