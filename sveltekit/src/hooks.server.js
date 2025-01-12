import { account } from "$lib/appwrite";
import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
    let currentUser = null;
    
    try {
        currentUser = await account.get();
    } catch (e) {
        currentUser = null;
    }

    if (event.url.pathname.startsWith("/app") && !currentUser) {
        throw redirect(302, "/login");
    }


    return resolve(event);
}