import './App.css'
import noteReducer from './reducers/noteReducer'
import { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'


const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state)

  const addNote = event => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    // store.dispatch(createNote(content))

    // Using useDispatch hook
    dispatch(createNote(content))
  }

  const toggleImportance = id => {
    // store.dispatch(toggleImportanceOf(id))

    // Using useDispatch hook
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note"/>
        <button type='submit'>add</button>
      </form>
      <ul>
        {/* {store.getState().map(note => ( */}
        {notes.map(note => (
          <li key={note.id} onClick={toggleImportance(note.id)}>
            {note.content} | 
            <strong>
              {note.important ? 'important' : 'not important'}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
