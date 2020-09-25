import React from 'react';
import './todoitem.css';

const TodoItem = (props) => {
    const handleChange = () => {
      props.onCheck(props.item);
    };

    return (
        <label className={props.item.done ? 'done' : ''}>
            <input
                type="checkbox"
                checked={props.item.done}
                onChange={handleChange}
            />
            {props.item.text}
        </label>
    )
}

export default TodoItem;