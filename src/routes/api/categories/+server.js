import { error, json } from "@sveltejs/kit";
import { createAdminClient } from "../../../lib/server/appwrite.js";
import { ID, Databases } from "node-appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

export async function GET({ locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    const fetchCategoriesResponse = await databases.listCollections(databaseId);

    let categories = fetchCategoriesResponse.collections;
    let categoryNames = [];

    for (let i = 0; i < categories.length; i++) {
      categoryNames.push(categories[i].name);
    }

    console.log(categoryNames);

    return json({ collections: categoryNames });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST({ request, locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    const { categoryName } = await request.json();

    const id = ID.unique();

    const createCategory = await databases.createCollection(
      databaseId,
      id,
      categoryName
    );

    return json(createCategory);
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to create category" }, { status: 500 });
  }
}
