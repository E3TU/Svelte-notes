import { writable, derived, get } from "svelte/store";
import { fetchNotes } from "./notesStore";

export const categories = writable([]);
export let categoryId = writable();

export const firstCategoryId = derived(
  [categories],
  ([$categories]) => $categories[0].$id
);

export async function fetchCategories() {
  const res = await fetch("api/categories");
  const data = await res.json();

  // console.log(data.documents);

  // Set collection data to categories store
  categories.set(data.documents);

  const isEmpty = get(categories).length;

  if (isEmpty === 0) {
    return;
  } else {
    fetchFirstCategory();
  }
}

export async function fetchFirstCategory() {
  const firstId = get(firstCategoryId);

  categoryId.set(firstId);

  fetchNotes();
}

export async function updateCategory($id) {
  categoryId.set($id);
  fetchNotes();
}
