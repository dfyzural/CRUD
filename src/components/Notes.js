import { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import NoteList from "./NoteList";

const URL = "http://localhost:7777/notes";

export default function Notes() {
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((notes) => {
                setNoteList(notes);
            });
    };

    const addNote = (item) => {
        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ content: item }),
        }).then(getNotes());
    };

    const deleteNote = (noteId) => {
        fetch(`${URL}/${noteId}`, {
            method: "DELETE",
        }).then(() => {
            getNotes();
        });
    };

    return (
        <div>
            <div className="update">
                <label className="update-title">Notes </label>
                <button className="update-button" onClick={getNotes}>
                    🔄
                </button>
            </div>

            <NoteList list={noteList} onRemove={deleteNote} />
            <AddNotes onAdd={addNote} />
        </div>
    )
}
