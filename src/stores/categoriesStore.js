import { writable } from "svelte/store";

export let categories = writable([]);
export let categoryName = writable("");

export async function fetchCategories() {
  const res = await fetch("api/categories");
  const data = await res.json();

  categories.set(data.collections);

  // categories.subscribe((value) => {
  //   console.log(value);
  // });
}
