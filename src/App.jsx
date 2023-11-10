import { createStore } from 'redux'
import './App.css'
import noteReducer from './reducers/noteReducer'

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

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

  const addNote = event => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    store.dispatch({
      type: 'NEW_NOTE',
      payload: {
        content,
        important: false,
        id: generateId()
      }
    })
  }

  const toggleImportance = id => {
    store.dispatch({
      type: 'TOGGLE_IMPORTANCE',
      payload: {id}
    })
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note"/>
        <button type='submit'>add</button>
      </form>
      <ul>
        {store.getState().map(note => (
          <li key={note.id}>
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
