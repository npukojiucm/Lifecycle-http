import HandlerOnClickGetNotes from "./HandlerOnClickGetNotes.jsx";

export default function FormNewNote({ setNotes }) {
    const handlerSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const response = await fetch("http://localhost:7070/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                content: form.get('note-content')
            })
        })

        if (response.status === 204) {
            e.target.reset();
            HandlerOnClickGetNotes(e, setNotes);
        }
    }

    return (
        <form action="#" className="new-note" onSubmit={handlerSubmit}>
            New Note

            <div className="form-group">
                <textarea name="note-content" id="note-content" className="note-content"></textarea>
                <button
                    className="add-note-btn btn"
                    type="submit"
                    onSubmit={handlerSubmit}>
                </button>
            </div>
        </form>
    )
}
