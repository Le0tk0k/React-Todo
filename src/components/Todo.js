import React, {useState} from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import './style/todo.css';

const getId = (() => {
    let count = 0;
    const countUp = () => {
        count++;
        return count;
    };
    return countUp;
})();

const menu = ['all', 'working', 'done']

const Todo = () => {
    const [items, setItems] = useState([]);

    const [filter, setFilter] = useState('all');

    const handleCheck = (checked) => {
        const newItems = items.map((item) => {
            if (item.id === checked.id) {
                item.done = !item.done;
            }
            return item
        });
        setItems(newItems);
    }

    const handleAdd = (text) => {
        setItems([...items, {id: getId(), text: text, done: false}]);
    }

    return (
        <div>
            <Form onAdd={handleAdd}/>
            <div>
                {
                    menu.map((item) => (
                        <label key={item} className="filter">
                            <input
                                type="radio"
                                value={item}
                                onChange={() => setFilter(item)}
                                checked={item === filter}
                            />
                            {item}
                        </label>
                    ))
                }
            </div>
            {
                items.filter((item) => (filter === 'all' || (filter === 'working' && !item.done) || (filter === 'done' && item.done)))
                    .map((item) => (
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