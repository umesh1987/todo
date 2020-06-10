import React, { Component } from 'react'

import "../pages/ToDo.css";

class InputForm extends Component {
    render() {
        return (
            <div className="twelve wide column column-right todo-content">

                <div className="input-content">
                    <form className="input-form" onSubmit={this.props.formSubmitHandler}>
                        <label>Things to do</label>
                        <input
                            type="text"
                            name="text"
                            placeholder="add your events"
                            autoComplete="off"
                            value={this.props.item}
                            onChange={this.props.onChangeHandler}
                        />
                        <button>ADD</button>
                    </form>
                </div>

            </div>
        );
    };
};

export default InputForm;


























/* *********************************************************
************************************************************

import React, { Component } from "react";
import shortid from "shortid";

class inputForm extends Component {
    constructor(props) {
        super(props)

        this.myRef = React.createRef();

        this.state = { userInputText: "" };

        //this.focusTextInput = this.focusTextInput.bind(this);
    }



    // inputeChangeHandler = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };

    SubmitHandler = (event) => {
        event.preventDefault();

        //submit form
        this.props.onSubmit({
            userInput: this.myRef.current.value,
            id: shortid.generate()
        });

        console.log(this.myRef.current.value)
    };

    render() {
        return (
            <div className="twelve wide column column-right todo-content">

                <div className="input-content">
                    <form className="input-form" onSubmit={this.SubmitHandler}>
                        <label>Things to do</label>
                        <input
                            type="text"
                            name="text"
                            placeholder="add your events"
                            ref={this.myRef}
                            onChange={this.inputeChangeHandler}
                        />
                        <button>ADD</button>
                    </form>
                </div>

            </div>
        );
    };
};

export default inputForm;

*/
/****
 *********************************************************
 *********************************************************
 */


/*
const Table = (props) => {


    const editToDo = () => {
        alert("you clicked edit button.")
    }
    return (
        <table className="ui celled table">

            <thead>
                <tr className="table-header">
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>


            {props.toDoLists.map((toDoList, index) => {
                return (
                    <tbody>
                        <tr key={index}>
                            <td>{toDoList.inputToDo}</td>
                            <td>
                                <button onClick={editToDo}>EDIT</button>
                            </td>
                            <td>
                                <button onClick={() => { props.onClick(index) }}>DELETE</button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}



        </table>
    );
};

export default Table;
*/