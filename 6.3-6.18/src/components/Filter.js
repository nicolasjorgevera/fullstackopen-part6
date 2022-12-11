import React from 'react'
import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from 'react-redux'


const Filter = () => {

  const dispatch = useDispatch()

  const filterSet = (event) => {
    dispatch( filterChange(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

    return (
    <div style={style}>
      Filter <input type="text" name="filter" onChange={filterSet}></input>
    </div>
    )
  }


  export default Filter