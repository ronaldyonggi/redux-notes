const noteReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_NOTE':
            // return state.concat(action.payload)
            return [...state, action.payload]
        case 'TOGGLE_IMPORTANCE': {
            // Get id from action's payload
            const id = action.payload.id 
            // Find the note that needs to be changed from state
            const noteToChange = state.find(note => note.id === id)
            
            // Create a whole new updated note
            const updatedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }

            // Update state
            return state.map(note => note.id === id ? updatedNote : note)
        }
        default:
            return state
    }
}

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNote = content => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = id => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}

export default noteReducer