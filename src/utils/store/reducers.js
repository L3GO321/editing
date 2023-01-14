import { fieldsReducer } from './fields/reducer'
import { servicesReducer } from './services/reducer'

export const preloadedState = {
  services: JSON.parse(localStorage.getItem('services')) || []
}

export const reducer = {
  services: servicesReducer,
  fields: fieldsReducer
}
