import React from 'react';

const List = ({todos}) => {
    const todoList = todos.map( todo => <li>{todo}</li>)
    return (
        <ul>
            <li>
                {todoList}
            </li>
        </ul>
    )
}

export default List