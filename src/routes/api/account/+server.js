import { json } from "@sveltejs/kit";
import { createSessionClient } from "../../../lib/server/appwrite";

export async function GET(event) {
  const { account } = createSessionClient(event);

  const currentAccount = await account.get();
  let userName = currentAccount.name;

  return json({ username: userName });
}

export async function POST(event) {
  const { request } = event;

  const data = await request.json();
  const { account } = createSessionClient(event);

  if (data.action === "updateusername") {
    const { username } = await request.json();

    const updateUsername = await account.updateName(username);

    return json(updateUsername);
  }

  if (data.action === "updatepassword") {
    const requestData = data;
    const { curpass, newpass } = requestData;


    const updatePassword = await account.updatePassword(
      newpass,
      curpass
    );

    return json(updatePassword);
  }
}
