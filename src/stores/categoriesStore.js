import { writable, derived } from "svelte/store";

export const categories = writable([]);
export const firstCategoryId = derived([categories], ([$categories]) => $categories[0].$id);
// export const collectionId = derived([firstCategory], ([$firstCategory]) => $firstCategory.$id); 

// export const categoryId = derived([categories], ([$categories]) => $categories[0]?.$id);

export const categoryId = writable();
// export const selectedCategoryId = writable();

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

  const unsubscribe = firstCategoryId.subscribe((value) => {
    // console.log(value);
    categoryId.set(value)
  });

  unsubscribe()

}

export async function updateCategory($id) {
  categoryId.set($id);
  console.log($id);
}