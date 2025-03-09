import { SESSION_COOKIE, createSessionClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { Databases } from "appwrite";
import { DATABASE_ID, COLLECTION_ID } from "$env/static/public";
import { fetchNotes } from "../../lib/server/database.js";

//Function that checks if user is not logged in they get redirected to register page.
export async function load({ locals, event }) {
    if (!locals.user) redirect(302, "/register");

    const notes = await fetchNotes({ event });

    return{
        user: locals.user,
        notes,
    };
}

//Function to Log out
export const actions = {
    default: async (event) => {
        const { account } = createSessionClient(event);

        await account.deleteSession("current");
        event.cookies.delete(SESSION_COOKIE, { path: "/" });

        redirect(302, "/register");
    },
};
