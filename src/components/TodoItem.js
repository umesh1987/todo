import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.title}</td>
                    <td> <button className="edit" onClick={this.props.editHandler}>EDIT</button> </td>
                    <td> <button className="delete" onClick={this.props.deleteHandler}>DELETE</button> </td>
                </tr>
            </tbody>
        );
    };
};

export default TodoItem;
