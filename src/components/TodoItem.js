import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
            {
                props.items.map((item) => (
                    <p>{item.text}</p>
                ))
            }
            <p>{props.items.length} items</p>
        </div>
    )
}

export default TodoItem;