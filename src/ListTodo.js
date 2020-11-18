import React from "react";
import ItemTodo from "./ItemTodo";

function ListTodo(props) {

    const {list = {}} = props;

    return (
        <div>
            {list.map((el, index) =>
                <ItemTodo
                    key={el.id}
                    todo={el}
                    index={index}
                    editTodo={props.editTodo}
                    deleteTodo={props.deleteTodo}
                    moveTodo={props.moveTodo}
                    isLast={index === list.length - 1}
                    updateTodo={props.updateTodo}
                />
            )}
        </div>
    );
}

export default ListTodo;
