import React, { Component } from 'react'
import shortid from "shortid";

import Header from "../components/Header";
import InputForm from "../components/InputForm"
import TodoList from "../components/TodoList";

class ToDo extends Component {

    state = {
        item: "",
        items: [],
        id: shortid.generate()
    };

    onChangeHandler = (event) => {
        this.setState({ item: event.target.value });
    };

    formSubmitHandler = (event) => {
        event.preventDefault();

        if (this.state.item === "") {
            alert("Please! enter your TODO name.");
        } else {

            // take the value from state.item and state.id then store to the new varailable = newItem 
            const newItem = { title: this.state.item, id: this.state.id };

            // take the value from newItem varilable then update to the state.items and store updatedItems varilable
            const updatedItems = [...this.state.items, newItem];

            // take the value from updatedItems varilable then setState to the state.items, generate unique id and clear input field
            this.setState({ items: updatedItems, id: shortid.generate(), item: "" });
        }
    };

    deleteHandler = (id) => {
        const filterItems = this.state.items.filter(item => item.id !== id);
        this.setState({ items: filterItems });
    };

    editHandler = (id) => {
        const filterItems = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({ items: filterItems, item: selectedItem.title });

    }

    render() {
        return (
            <div>
                <div>
                    <Header header="To do list" />
                </div>

                <div>
                    <InputForm
                        item={this.state.item}
                        onChangeHandler={this.onChangeHandler}
                        formSubmitHandler={this.formSubmitHandler}
                    />
                </div>

                <div>
                    <TodoList
                        items={this.state.items}
                        deleteHandler={this.deleteHandler}
                        editHandler={this.editHandler}
                    />
                </div>

            </div>
        );
    };
};

export default ToDo;














/*********************************************************************
 * *****************************************************************

import React, { Component } from "react";

import Header from "../components/Header";
import InputForm from "../components/inputForm";
import "./ToDo.css";

class ToDo extends Component {

    state = { todos: [] };


    addListTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });

        //console.log(this.state.todos)
    };


    render() {
        return (
            <React.Fragment>
                <div>
                    <Header header="To do list" />
                </div>
                <div>
                    <InputForm onSubmit={this.addListTodo} />
                </div>
                <div>
                    <ul>
                        {this.state.todos ? this.state.todos.map((item) => <li><span>{item.userInput}</span><span> id {item.id}</span></li>) : <li></li>}
                    </ul>
                </div>


            </React.Fragment>
        );
    };
};


export default ToDo;

*/
/*************************************************************************
 * *********************************************************************
 */

/*
   import Header from "../components/Header";
    import Table from "../components/Table";

const [inputToDo, setInputToDo] = useState("");
const [toDoLists, setToDoLists] = useState([]);


const onChangeHandler = (event) => {
    setInputToDo({ inputToDo: event.target.value });
}

const addToDoLists = (event) => {
    event.preventDefault();

    if (inputToDo === "") {
        alert("Please enter your To-Do event.");
    } else {
        setToDoLists((currentItems) => {
            return [...currentItems, inputToDo];
        })
    }

    setInputToDo("");
}

const deleteToDo = (index) => {
    setToDoLists((currentItems) => {
        return currentItems.filter((index) => {
            return index !== index;
        })
    })
};


return (
    <React.Fragment>
        <div>
            <Header header="To do list" />
        </div>

        <div className="twelve wide column column-right todo-content">

            <div className="input-content">
                <form className="input-form" onSubmit={addToDoLists}>
                    <label>Things to do</label>
                    <input
                        type="text"
                        placeholder="add your events"
                        autoComplete="off"
                        onChange={onChangeHandler}
                    />
                    <button onClick={addToDoLists}>ADD</button>
                </form>
            </div>

            <div className="input-list__table">
                <Table toDoLists={toDoLists} onClick={deleteToDo} />
            </div>

        </div>


    </React.Fragment>
);
};*/