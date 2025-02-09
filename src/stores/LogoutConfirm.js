import { writable } from 'svelte/store';

// Logout confirm menu is closed as default
export const isLogoutConfirmMenuOpen = writable(false);

// Function to open the log out confirm menu
export function logoutConfirmMenu() {
    isLogoutConfirmMenuOpen.update(value => !value);
}