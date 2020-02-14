import React from 'react';

const Form = props => {

  return(
    <form onSubmit={props.searchSubmit}>
      <input 
        type="text"
        name="nameSearch"
        value={props.nameSearch}
        onChange={props.handleChange}
      />
    </form>
  )
}

export default Form;