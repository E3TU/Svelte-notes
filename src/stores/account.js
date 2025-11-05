import { writable } from "svelte/store";

export let userName = writable("");
export let currentPassword = writable("");
export let newPassword = writable("");

export async function fetchUserName() {
  const res = await fetch("/api/account");
  const data = await res.json();

  userName.set(data.username);
}

export async function updateUsername() {
  userName.subscribe(async (value) => {
    const res = await fetch("/api/account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "updateusername",
        username: value,
      }),
    });
    const data = await res.json();
  });
}

export async function updatePassword(currentpassword, newpassword) {
  const res = await fetch("/api/account", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "updatepassword",
      curpass: currentpassword,
      newpass: newpassword,
    }),
  });
}
