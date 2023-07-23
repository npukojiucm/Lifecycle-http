export default async function HandlerOnClickGetNotes(e, SetNotes) {
    const req = await fetch("http://localhost:7070/notes");
    const res = await req.json();

    return SetNotes([
        ...res.notes
    ])
}
