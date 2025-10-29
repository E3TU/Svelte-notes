import { writable } from "svelte/store";

export const activeModal = writable(null);

export function openModal(modalName) {
    activeModal.set(modalName);
}

export function closeModal() {
    activeModal.set(null);
}