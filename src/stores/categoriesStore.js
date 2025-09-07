import { writable } from "svelte/store";

export let categories = writable([]);
export let categoryNames = writable([]);

export let firstCategory = writable(null);

export async function fetchCategoryNames() {
  const res = await fetch("api/categories");
  const data = await res.json();

  categories.set(data.collections);

  for (let i = 0; i < data.collections.length; i++) {
    // console.log(data.collections[i].name);
    categoryNames.update((names) => {
      names.push(data.collections[i].name);
      return names;
    });
  }


  // categories.subscribe((value) => {
  //   console.log(value[0]);
  // });

  // firstCategory.subscribe((value) => {
  //   console.log(value);
  // });

  // categoryNames.subscribe((value) => {
  //   console.log(value);
  // });

  // categories.subscribe((value) => {
  //   console.log(value);
  // });
}

export async function fetchFirstCategory() {
  const res = await fetch("api/categories");
  const data = await res.json();

  categories.subscribe((value) => {
    console.log(value);
  });
}
