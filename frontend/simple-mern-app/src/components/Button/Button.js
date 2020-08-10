import React from 'react';

import './Button.module.css';

const Button = (props) => {
  return (
    <button className='button' type={props.type}>
      {props.children}
    </button>
  );
};

export default button;
