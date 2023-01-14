import { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { servicesActions } from '../../utils/store/services/actions'
import { fieldsActions } from '../../utils/store/fields/actions'

const initialValues = {
  id: '',
  name: '',
  price: ''
}

export const ServiceFrom = () => {
  const formValues = useSelector((store) => store.fields)
  const dispatch = useDispatch()

  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    setValues(formValues)
  }, [formValues])

  const onChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const saveService = () => {
    dispatch({
      type: values.id ? servicesActions.EDIT_SERVICE : servicesActions.ADD_SERVICE,
      payload: values
    })
  }

  const cancelEdit = () => {
    dispatch({
      type: fieldsActions.CHANGE_VALUES,
      payload: initialValues
    })
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <input type='text' name='name' value={values.name} onChange={onChange} />
      <input type='text' name='price' value={values.price} onChange={onChange} />
      <button
        onClick={saveService}
        disabled={!values.name || !values.price}
      >
        {values.id ? 'Редактировать' : 'Добавить'}
      </button>
      <button hidden={!values.id} onClick={cancelEdit}>Отменить</button>
    </div>
  )
}