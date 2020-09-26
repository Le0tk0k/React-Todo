import React from 'react';
import './style/todoitem.css';

const TodoItem = (props) => {
    const handleChange = () => {
      props.onCheck(props.item);
    };

    return (
        <div className="item">
            <label className={props.item.done ? 'done' : ''}>
                <input
                    type="checkbox"
                    checked={props.item.done}
                    onChange={handleChange}
                />
                {props.item.text}
            </label>
        </div>
    )
}

export default TodoItem;