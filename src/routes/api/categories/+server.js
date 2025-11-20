import { json } from "@sveltejs/kit";
import { createAdminClient, createSessionClient } from "../../../lib/server/appwrite.js";
import { ID, Databases, Role, Permission } from "node-appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const categoriesCollectionId = import.meta.env.VITE_CATEGORIES_COLLECTION_ID;

export async function GET({ locals }) {
  const { account } = createAdminClient(locals);
  const databases = new Databases(account.client);

  try {
    const fetchCategoriesResponse = await databases.listDocuments(
      databaseId,
      categoriesCollectionId
    );

    let categories = fetchCategoriesResponse.documents;

    // console.log(categories[0].$id);

    return json({ documents: categories });
    // let test = "kurwa";

    // return json({ test });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(event) {
  const { request } = event;

  const { account } = createSessionClient(event);
  
  const databases = new Databases(account.client);

  try {
    const { categoryName } = await request.json();

    // const categoryId = ID.unique();

    const user = await account.get();
    const userId = user.$id;

    console.log(categoryName);

    const createCategory = await databases.createDocument(
      databaseId,
      categoriesCollectionId,
      // categoryId,
      ID.unique(),
      { title: categoryName, userId: userId },
      [
        Permission.read(Role.user(userId)), 
        Permission.write(Role.user(userId)),
      ]
    );

    return json(createCategory);
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to create category" }, { status: 500 });
  }
}
