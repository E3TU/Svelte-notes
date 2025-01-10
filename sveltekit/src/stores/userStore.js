import { writable } from "svelte/store";
import { account, ID } from '$lib/appwrite';
import { goto } from "$app/navigation";

const isBrowser = typeof window !== 'undefined';

const createUser = () => {
    const store = writable(null);

    async function init() {
        if (!isBrowser) return;
        try{
            store.set(await account.get());
        } catch (e) {
            store.set(null);
        }
    }


    init();

    async function register(email, password, username) {
        await account.create(ID.unique(), email, password, username);

        login(email, password);
    }

    async function login(email, password) {
        await account.createEmailPasswordSession(email, password);
        // loggedInUser = await account.get();
        await init();
        goto('/');
    }

    async function logout() {
        await account.deleteSession('current');
        store.set(null);
    }

    return{
        subscribe: store.subscribe,
        register,
        login,
        logout,
        init
    };
};

export const user = createUser();
