import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import { servicesActions } from '../../utils/store/services/actions'
import { fieldsActions } from '../../utils/store/fields/actions'

export const ServicesList = () => {
  const { services, fields } = useSelector((store) => store)
  const dispatch = useDispatch()

  const [searchKey, setSearchKey] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    filterServices()
  }, [searchKey, services])

  const filterServices = () => {
    setFiltered(services.filter((service) => service.name.toLowerCase().includes(searchKey.toLowerCase())))
  }

  const editService = (values) => {
    dispatch({
      type: fieldsActions.CHANGE_VALUES,
      payload: values
    })
  }

  const deleteService = (deletedId) => {
    dispatch({
      type: servicesActions.DELETE_SERVICE,
      payload: { id: deletedId }
    })

    if (fields.id === deletedId) {
      dispatch({
        type: fieldsActions.DELETE_ID
      })
    }
  }

  return (
    <>
      <label>
        Поиск:
        <input
          type='text'
          name='search'
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </label>
      <ul>
        {filtered.length ?
          filtered.map(service => (
            <li key={service.id}>
              <div style={{ display: 'flex', columnGap: '5px', alignItems: 'center' }}>
                <div>{service.name} {service.price}</div>
                <button onClick={() => editService(service)}>✎</button>
                <button onClick={() => deleteService(service.id)}>✖</button>
              </div>
            </li>
          )) : <div>Нет услуг</div>}
      </ul>
    </>
  )
}