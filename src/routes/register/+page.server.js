import { SESSION_COOKIE, createAdminClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { ID } from "node-appwrite";

export const actions = {
    register: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");
        const name = form.get("name");

        const { account } = createAdminClient();

        await account.create(ID.unique(), email, password, name);
        const session = await account.createEmailPasswordSession(email, password);

        cookies.set(SESSION_COOKIE, session.secret, {
            sameSite: "strict",
            expires: new Date(session.expire),
            secure: true,
            path: "/",
        });

        redirect(302, "/app");
    },
};
