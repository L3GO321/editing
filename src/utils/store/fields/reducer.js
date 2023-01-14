import { fieldsActions } from './actions'

const initialState = { id: '', name: '', price: '' }

export const fieldsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fieldsActions.CHANGE_VALUES:
      return action.payload

    case fieldsActions.DELETE_ID:
      return { ...state, id: '' }

    default:
      return state
  }
}