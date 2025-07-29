import { createAdminClient } from "../../../lib/server/appwrite.js";
import { Databases, ID } from "appwrite";

export async function POST(request, locals) {
    const { account } = createAdminClient(locals);
    const databases = new Databases(account.client);

    try {
        const createCategory = await databases.createCollection();
    } catch {
        
    }
}