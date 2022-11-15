import Note from "./Note";
import { nanoid } from 'nanoid'

export default function NoteList({ list, onRemove }) {
    const onRemoveItem = (id) => {
        onRemove(id);
    }

    return (
        <div className="notes-list">
            {list.map((o) => (
                <Note note={o} handleRemove={onRemoveItem} key={nanoid()} />
            ))}
        </div>
    )
}