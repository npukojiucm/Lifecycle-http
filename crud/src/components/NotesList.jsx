import Button from "./Button.jsx";
import HandlerOnClickGetNotes from "./HandlerOnClickGetNotes.jsx";

export default function NotesList({ notes, setNotes }) {
    const handlerClick = async (e) => {
        const listItem = e.target.closest(".list-item");
        const { id } = listItem.dataset;

        const response = await fetch("http://localhost:7070/notes", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                id,
            })
        });

        if (response.status === 204) {
            return HandlerOnClickGetNotes(e, setNotes);
        }
    }

    const paramsButton = {
        clasName: "del-note-btn btn",
        handlerOnClick: handlerClick,
    }

    const listItems = notes.map(note =>
        <div className={"list-item"} key={note.id} data-id={note.id}>
            {note.content}
            <Button {...paramsButton} />
        </div>
    )

    return (
        <div className="notes-list">
            {listItems}
        </div>
    )
}
