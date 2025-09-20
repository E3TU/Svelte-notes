import { json } from "@sveltejs/kit";
import { writable, derived } from "svelte/store";

export const categories = writable([]);
export const firstCategoryId = derived(
  [categories],
  ([$categories]) => $categories[0].$id
);


export async function fetchCategories() {
  const res = await fetch("api/categories");
  const data = await res.json();

  // Set collection data to categories store
  categories.set(data.collections);

  // console.log(data);

  fetchFirstCategory();
}

export async function fetchFirstCategory() {
  firstCategoryId.subscribe(async (value) => {
    // console.log(value);
    
    const res = await fetch("api/updateid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstId: value }),
    });
    const data = await res.json();
    console.log(data);
  });
}

export async function updateCategory($id) {
  const res = await fetch("/api/updateid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ updatedId: $id }),
  });
  const data = await res.json();
  console.log(data);
}
