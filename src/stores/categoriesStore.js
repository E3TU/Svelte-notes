import { writable } from "svelte/store";

export let categories = writable([]);
export let categoryNames = writable([]);

export async function fetchCategoryNames() {
  const res = await fetch("api/categories");
  const data = await res.json();

  categories.set(data.collections);  
  categoryNames.set(data.collectionNames);

  categoryNames.subscribe((value) => {
    console.log(value);
  });

  categories.subscribe((value ) => {
    console.log(value);
  });

}
