import { writable } from "svelte/store";

export let categories = writable([]);
export let categoryNames = writable([]);

export async function fetchCategoryNames() {
  const res = await fetch("api/categories");
  const data = await res.json();

  for (let i = 0; i < data.collections.length; i++) {
    // console.log(data.collections[i].name);
    categoryNames.update((names) => {
      names.push(data.collections[i].name);
      return names;
    });
  }

  categories.set(data.collections);

  // categoryNames.subscribe((value) => {
  //   console.log(value);
  // });

  // categories.subscribe((value) => {
  //   console.log(value);
  // });
}
