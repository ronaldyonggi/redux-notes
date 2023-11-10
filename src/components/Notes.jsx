import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../reducers/noteReducer"

const Note = ({ note, handleClick }) => {
    return (
        <li onClick={handleClick}>
            {note.content} | 
            <strong> {note.important ? 'important' : 'not important'}</strong>
        </li>
    )
}

const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state)

    return (
        <ul>
            {notes.map(notes => (
                <Note
                    key={note.id}
                    note={note}
                    handleClick={() => dispatch(toggleImportanceOf(note.id))}
                />
            ))}
        </ul>
    )
}

export default Notes