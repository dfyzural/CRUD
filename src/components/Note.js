

export default function Note({ note, handleRemove }) {
    return (
        <div className="note">
            <div className="note-value">{note.content}</div>
            <button className="remove-button" onClick={() => handleRemove(note.id)}>
                ×
            </button>
        </div>
    );
}
