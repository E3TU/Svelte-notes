import { createSessionClient } from "./lib/server/appwrite";

// Function that runs for every request to the server to ensure the user is properly authenticated
export async function handle({ event, resolve }) {
    try {
        const { account } = createSessionClient(event);

        event.locals.user = await account.get();
    } catch{}

    return resolve(event);
}
