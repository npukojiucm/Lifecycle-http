import FormNewNote from "./FormNewNote.jsx";
import Button from "./Button.jsx";
import {useState} from "react";
import NotesList from "./NotesList.jsx";
import HandlerOnClickGetNotes from "./HandlerOnClickGetNotes.jsx";

export default function WidgetNotes() {
    const [notes, SetNotes] = useState([]);

    const handler = e =>  HandlerOnClickGetNotes(e, SetNotes);

    return (
        <div className={"notes"}>
            <h1>Notes</h1>

            <Button
                clasName={"update-notes-btn btn"}
                handlerOnClick={handler}
            />

            <NotesList notes={notes} setNotes={SetNotes}/>

            <FormNewNote setNotes={SetNotes}/>
        </div>
    )
}
