import React, {useState} from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";

const radioStyle = {
    "margin": "10px",
    "fontSize": "18px"
}

const menu = ['all', 'working', 'done']

const Todo = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'list 1', done: false },
        { id: 2, text: 'list 2', done: false },
        { id: 3, text: 'list 3', done: false },
    ]);

    const handleCheck = (checked) => {
        const newItems = items.map((item) => {
            if(item.id === checked.id) {
                item.done = !item.done;
            }
            return item
        });
        setItems(newItems);
    }

    return (
        <div>
            <Form />
            {
                menu.map((item) => (
                <label key={item} style={radioStyle}>
                    <input type="radio" value={item} />{item}
                </label>
                ))
            }
            {
                items.map((item) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onCheck={handleCheck}
                    />
                ))
            }
        </div>
    )
}

export default Todo;