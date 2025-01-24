import { redirect } from "@sveltejs/kit";

// Function that checks if user is logged in or not and redirects them based on that.
export async function load({ locals }) {
    if (!locals.user) {
        redirect(301, "/register");
    }

    redirect(301, "/app")
}