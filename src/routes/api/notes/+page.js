export async function load({ fetch }) {
    const res = await fetch("/api/notes");
    const data = await res.json();
    return { notes: data.documents };
}