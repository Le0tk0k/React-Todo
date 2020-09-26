import React, {useState} from 'react';
import './style/form.css';

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
          className="form"
          type="text"
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDone}
      />
    </div>
  )
}

export default Form;