import React from "react";
import ListItem from "./ListItem";
import Form from "./Form";

const radioStyle = {
    "margin": "10px",
    "fontSize": "18px"
}

const menu = ['all', 'working', 'done']

const List = () => {
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
            <ListItem />
        </div>
    )
}

export default List;