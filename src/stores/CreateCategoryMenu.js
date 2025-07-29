//Store to open and close category creation modal

import { writable } from 'svelte/store';

// Note creation menu is closed as default
export const isCreateCategoryMenuOpen = writable(false);

// Function to open the category creation menu
export function createCategoryMenu() {
    isCreateCategoryMenuOpen.update(value => !value);
}