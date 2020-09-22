import React from 'react';

const buttonStyle = {
  "fontSize": "18px",
  "backgroundColor": "#494949",
  "color": "#fff",
  "cursor": "pointer",
  "padding": "6px 10px",
  "borderRadius": "6px",
  "borderWidth": "0"
}

const Button = () => {
  return (
    <button style={buttonStyle}>Add</button>
  )
}

export default Button