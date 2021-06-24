import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => (
                    <TodoListItem 
                        //Siempre en el key, no es bueno mandar el index, se debe mandar el id real
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}
