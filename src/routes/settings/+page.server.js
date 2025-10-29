import { createSessionClient } from "$lib/server/appwrite.js";

export async function load(event) {
  const { account } = createSessionClient(event);
  const test = "test";

  return {
    test,
  };
}

export const actions = {
  default: async (event) => {

    const { request } = event;

    const form = await request.formData();
    const username = form.get("change-username").trim();
 
    const { account } = createSessionClient(event);

    // console.log(event);

    await account.updateName(
      username,
    );
  },
};
