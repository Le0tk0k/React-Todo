import React, {useState} from "react";
import ListItem from "./ListItem";
import Form from "./Form";

const radioStyle = {
    "margin": "10px",
    "fontSize": "18px"
}

const menu = ['all', 'working', 'done']

const List = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'list 1', done: false },
        { id: 2, text: 'list 2', done: false },
        { id: 3, text: 'list 3', done: false },
    ])

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
            <ListItem items={items} />
        </div>
    )
}

export default List;