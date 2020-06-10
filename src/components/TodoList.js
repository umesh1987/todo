import React, { Component } from 'react'

import EventNotFound from "./EventNotFound";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {

        if (this.props.items.length === 0) {
            return (
                <EventNotFound />
            )

        } else {
            return (
                <div className="table__table">
                    <table className="ui celled table">

                        <thead>
                            <tr className="table-header">
                                <th>Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>


                        {this.props.items.map(item => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    title={item.title}
                                    deleteHandler={() => this.props.deleteHandler(item.id)}
                                    editHandler={() => this.props.editHandler(item.id)}
                                />
                            )
                        })}

                    </table>

                </div>
            );
        };

    };
};

export default TodoList;
