import { Client, Account } from "node-appwrite";
import { APPWRITE_KEY } from "$env/static/private"
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT } from "$env/static/public";


export const SESSION_COOKIE = "user-session";

// Creates a client instance for interacting with Appwrite backend using admin credentials
export function createAdminClient() {
    const client = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT)
    .setKey(APPWRITE_KEY);

    return {
        get account() {
            return new Account(client);
        }
    };
}
// Creates a client instance for interacting with the Appwrite backend  using the current user's session stored in cookies
export function createSessionClient(event) {
    const client = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT);

    const session = event.cookies.get(SESSION_COOKIE);
    if (!session) {
        throw new Error("No user session");
    }

    client.setSession(session);

    return {
        get account() {
            return new Account(client);
        }
    };
}