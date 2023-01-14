import { nanoid } from 'nanoid'

import { servicesActions } from './actions'

const initialState = []

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case servicesActions.ADD_SERVICE:
      return [...state, { ...action.payload, id: nanoid() }]

    case servicesActions.EDIT_SERVICE:
      const editable = action.payload
      const findServiceI = state.findIndex(service => service.id === editable.id)
      if (~findServiceI) {
        const services = [...state]
        services[findServiceI] = editable
        return services
      }
      return [...state, editable]

    case servicesActions.DELETE_SERVICE:
      return state.filter(service => service.id !== action.payload.id)

    default:
      return state
  }
}