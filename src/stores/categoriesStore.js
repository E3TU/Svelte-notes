import { writable, derived } from "svelte/store";

export let categories = writable([]);
export let firstCategory = derived([categories], ([$categories]) => $categories[0]); 

// export let firstCategory = writable(null);

export async function fetchCategories() {
  const res = await fetch("api/categories");
  const data = await res.json();

  // Set collection data to categories store
  categories.set(data.collections);

  // console.log(data);

  fetchFirstCategory();
}

export async function fetchFirstCategory() {
  firstCategory.subscribe((value) => {
    console.log(value);
  });
}
