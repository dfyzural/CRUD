import { useState } from "react";

export default function AddNotes({ onAdd }) {
    const [note, setNote] = useState("");

    const handleChange = (event) => {
        const { target } = event;
        setNote(target.value);
    };

    const onAddNotes = (event) => {
        event.preventDefault();
        onAdd(note);
        setNote("");
    };

    return (
        <form className="add-note-form" onSubmit={onAddNotes}>
            <div className="note-input">
                <label className="note-title">New Note</label>
                <textarea className="note-value" value={note} onChange={handleChange} />
            </div>
            <input className="note-add-button" type="submit" value="➤" />
        </form>
    );
}
