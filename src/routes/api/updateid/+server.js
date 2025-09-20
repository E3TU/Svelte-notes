import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const { firstId, updatedId } = await request.json();

  return json({
    firstId: firstId !== undefined ? firstId : null,
    updatedId: updatedId !== undefined ? updatedId : null,
  });
}
