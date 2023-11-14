import { createSlice } from "@reduxjs/toolkit"

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

// const noteReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'NEW_NOTE':
//             // return state.concat(action.payload)
//             return [...state, action.payload]
//         case 'TOGGLE_IMPORTANCE': {
//             // Get id from action's payload
//             const id = action.payload.id 
//             // Find the note that needs to be changed from state
//             const noteToChange = state.find(note => note.id === id)
            
//             // Create a whole new updated note
//             const updatedNote = {
//                 ...noteToChange,
//                 important: !noteToChange.important
//             }

//             // Update state
//             return state.map(note => note.id === id ? updatedNote : note)
//         }
//         default:
//             return state
//     }
// }


// export const createNote = content => {
//   return {
//     type: 'NEW_NOTE',
//     payload: {
//       content,
//       important: false,
//       id: generateId()
//     }
//   }
// }

// export const toggleImportanceOf = id => {
//   return {
//     type: 'TOGGLE_IMPORTANCE',
//     payload: { id }
//   }
// }

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      const content = action.payload
      state.push({
        content,
        important: false,
        id: generateId()
      })
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
    }
  }
})

export const { createNote, toggleImportanceOf } = noteSlice.actions
export default noteSlice.reducer