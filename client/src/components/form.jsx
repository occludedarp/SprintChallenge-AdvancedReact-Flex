import React from 'react';

const Form = props => {

  return(
    <div className="form">
      <form onSubmit={props.searchSubmit}>
        <input 
          type="text"
          name="nameSearch"
          value={props.nameSearch}
          onChange={props.handleChange}
        />
      </form>
    </div>
  )
}

export default Form;