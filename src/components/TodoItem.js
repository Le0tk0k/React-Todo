import React from 'react';

const TodoItem = (props) => {
    return (
        <label>
            <input type="checkbox" />{props.item.text}
        </label>
    )
}

export default TodoItem;