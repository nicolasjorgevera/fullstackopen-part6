import React from 'react'
import { filterChange } from "../reducers/filterReducer"
import { connect } from 'react-redux'


const Filter = (props) => {


  const filterSet = (event) => {
    props.filterChange(event.target.value)
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



  export default connect(
    null,
    { filterChange }
    )(Filter)