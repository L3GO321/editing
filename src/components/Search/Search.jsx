import { useState } from "react"

export const Search = () => {
  const [searchKey, setSearchKey] = useState('')

  return (
    <label>
      Поиск:
      <input type='text' name='search' />
    </label>
  )
}