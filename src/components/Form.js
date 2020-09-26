import React, {useState} from 'react';

const inputStyle = {
  "width": "380px",
  "fontSize": "18px",
  "padding": "6px",
  "borderWidth": "0",
  "borderRadius": "6px",
  "marginRight" :"12px"
}

const Form = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDone = (e) => {
    if (e.keyCode === 13 && text !== '') {
      props.onAdd(text);
      setText('');
    }
  };

  return (
    <div>
      <input
          type="text"
          style={inputStyle}
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDone}
      />
    </div>
  )
}

export default Form;