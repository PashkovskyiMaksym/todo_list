import React, {useState} from "react";
import ListTodo from "./ListTodo";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const id = require('uniqid');

    const initState = [
        {id: id('_listId-'), title: 'Learn HTML', done: false},
        {id: id('_listId-'), title: 'Learn CSS', done: false},
        {id: id('_listId-'), title: 'Learn JS', done: false},
        {id: id('_listId-'), title: 'Learn REACT', done: false},
    ];

    const [list, setList] = useState(initState);
    const [inputValue, setInputValue] = useState('');

    const addTodoHandler = () => {
        const newTodo = {
            id: id('_listId-'),
            title: inputValue,
            done: false,
        };
        const newList = [...list, newTodo];
        setList(newList);
        setInputValue('');
    }

    const updateTodo = (id) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, done: !el.done};
            return el;
        })
        setList(newList);
    }

    const editTodo = (value, id) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, title: value};
            return el;
        });
        setList(newList);
    }

    const deleteTodo = (id) => {
        const newList = list.filter(el => el.id !== id);
        setList(newList);
    }

    const moveTodo = (currentIndex, nextIndex) => {
        const newList = [...list];
        const currentEl = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentEl;
        setList(newList);
    }

    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">Todo List</h1>
            <p className="d-flex justify-content-center">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="button" className="btn btn-outline-primary" onClick={addTodoHandler}>Add Todo</button>
            </p>

            <ListTodo
                list={list}
                deleteTodo={deleteTodo}
                moveTodo={moveTodo}
                editTodo={editTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default App;
