import { writable } from "svelte/store";
import { ID } from "appwrite";
import { goto } from "$app/navigation";
import { account } from "$lib/appwrite";

const isBrowser = typeof window !== "undefined";

const createUser = () => {
  const store = writable(null);

  async function init() {
    if (!isBrowser) return;
    try {
        store.set(await account.get());
    } catch (e) {
        console.error("You are not logged in");
        store.set(null);
    }
}

  init();

  // Function for registering user account
  async function register(email, password, username) {
    if (!isBrowser) return;
    await account.create(ID.unique(), email, password, username);
    await login(email, password);
  }

  // Function for logging in user
  async function login(email, password) {
    if (!isBrowser) return;
    await account.createEmailPasswordSession(email, password);
    // loggedInUser = await account.get();
    console.log("Logged in successfully");
    await init();
    goto("/notes");
  }

  // Function for logging user out
  async function logout() {
    await account.deleteSession("current");
    store.set(null);
  }

  return {
    subscribe: store.subscribe,
    register,
    login,
    logout,
    init,
  };
};

export const user = createUser();
