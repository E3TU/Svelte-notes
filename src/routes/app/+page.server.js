import { SESSION_COOKIE, createSessionClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";

//Function that checks if user is not logged in they get redirected to register page.
export async function load({ locals, event }) {
    if (!locals.user) redirect(302, "/register");
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
