import { writable } from "svelte/store";

export let userName = writable("");

export async function fetchUserName() {
  const res = await fetch("/api/account");
  const data = await res.json();

  userName.set(data.username);
}

export async function updateUsername() {
    
}


