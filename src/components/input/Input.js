import React from 'react';

import './Input.css';

const Input = (props) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};

export default Input;
