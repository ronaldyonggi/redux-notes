import { createSlice } from "@reduxjs/toolkit"

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload)

    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      // Find the note whose importance's about to be changed (matching id)
      const noteToChange = state.find(n => n.id === id)
      // Create the updated note
      const updatedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }

      console.log(JSON.parse(JSON.stringify(state)))

      return state.map(note => note.id === id ? updatedNote : note)
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})

export const initializeNotes = () => {
  return async dispatch => {
    // Fetch the notes first from server before dispatching -> uses await
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}
export default noteSlice.reducer