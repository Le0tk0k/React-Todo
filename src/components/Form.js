import React from 'react';
import Button from '../shared/Button';

const inputStyle = {
  "width": "380px",
  "fontSize": "18px",
  "padding": "6px 2px",
  "borderWidth": "0",
  "borderRadius": "6px",
  "marginRight" :"12px"
}

const Form = () => {
  return (
    <div>
      <input style={inputStyle} />
      <Button />
    </div>
  )
};

export default Form;