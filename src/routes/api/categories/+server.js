import { json } from "@sveltejs/kit";
import {
  createAdminClient,
  createSessionClient,
} from "../../../lib/server/appwrite.js";
import { ID, Databases, Role, Permission, Query } from "node-appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const categoriesCollectionId = import.meta.env.VITE_CATEGORIES_COLLECTION_ID;

export async function GET(event) {
  const { account } = createSessionClient(event);
  const databases = new Databases(account.client);

  const user = await account.get();
  const userId = user.$id;

  try {
    const fetchCategoriesResponse = await databases.listDocuments(
      databaseId,
      categoriesCollectionId,
      [
        Query.equal("userId", userId)
      ]
    );

    let categories = fetchCategoriesResponse.documents;

    return json({ documents: categories });
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

    const user = await account.get();
    const userId = user.$id;

    const createCategory = await databases.createDocument(
      databaseId,
      categoriesCollectionId,
      ID.unique(),
      { title: categoryName, userId: userId },
      [Permission.read(Role.user(userId)), Permission.write(Role.user(userId))]
    );

    return json(createCategory);
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to create category" }, { status: 500 });
  }
}
