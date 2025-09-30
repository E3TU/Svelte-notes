import { json } from "@sveltejs/kit";
import { writable, derived, get } from "svelte/store";
import { fetchNotes } from "./notesStore";

export const categories = writable([]);

// categories.subscribe((value) => {
//   console.log(value.length);

//   if (value.length === 0) {
//     console.log("kurwa bober");
//   }
// })

export const firstCategoryId = derived(
  [categories],
  ([$categories]) => $categories[0].$id
);

export const categoryId = writable();

export async function fetchCategories() {
  const res = await fetch("api/categories");
  const data = await res.json();

  // Set collection data to categories store
  categories.set(data.collections);

  const isEmpty = get(categories).length;
  // console.log(isEmpty);

  if (isEmpty === 0) {
    // console.log("No categories to load");
    return 0;
  } else {
    fetchFirstCategory();
  }

  // console.log(data);
}

export async function fetchFirstCategory() {
  firstCategoryId.subscribe(async (value) => {
    // console.log(value);
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "firstcategoryid", firstId: value }),
    });
    const data = await res.json();
    console.log(data);
    fetchNotes();
  });
}

export async function updateCategory($id) {
  categoryId.set($id);
  // console.log($id);

  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "updatedcategoryid", updatedId: $id }),
  });
  const data = await res.json();
  console.log(data);
  fetchNotes();
}
