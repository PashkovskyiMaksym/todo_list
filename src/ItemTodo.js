import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemTodo(props) {

    const {todo = {}} = props;
    const {done} = todo;

    const style = {
        'textDecoration': 'line-through'
    }

    const isDone = done ? style : {};

    const [inputNewTitle, setInputNewTitle] = useState(todo.title);
    const [isEditModeOn, setIsEditModeOn] = useState(false);

    const saveTodoButtonHandler = () => {
        props.editTodo(inputNewTitle, todo.id);
        setInputNewTitle('');
        setIsEditModeOn(!isEditModeOn);
    }

    const updateTodoButtonHandler = () => {
        props.updateTodo(todo.id);
    }

    return (

        <ul>
            <li>
                <span style={isDone}>{todo.title}</span>
                <br/>
                <button disabled={props.index === 0} type="button" className="btn btn-outline-primary"
                        onClick={() => props.moveTodo(props.index, props.index - 1)}>↑
                </button>
                <button disabled={props.isLast} type="button" className="btn btn-outline-primary"
                        onClick={() =>
                            props.moveTodo(props.index, props.index + 1)}>↓
                </button>

                {!todo.done && <button type="button" class="btn btn-outline-primary"
                                       onClick={updateTodoButtonHandler}>Done</button>}
                {todo.done && <button type="button" class="btn btn-outline-primary"
                                      onClick={updateTodoButtonHandler}>Undone</button>}
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => props.deleteTodo(todo.id)}>Delete
                </button>

                {isEditModeOn &&
                <>
                    <label> New title: </label>
                    <input
                        type="text"
                        value={inputNewTitle}
                        onChange={(e) => setInputNewTitle(e.target.value)}
                    />
                    <button type="button" class="btn btn-outline-primary"
                            onClick={saveTodoButtonHandler}>Save
                    </button>
                </>
                }
                {!isEditModeOn &&
                <button type="button" class="btn btn-outline-primary"
                        onClick={() => setIsEditModeOn(!isEditModeOn)}>Edit</button>}
                {isEditModeOn &&
                <button type="button" class="btn btn-outline-primary"
                        onClick={() => setIsEditModeOn(!isEditModeOn)}>Cancel</button>}
            </li>
        </ul>
    );
}

export default ItemTodo;

