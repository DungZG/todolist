import React from 'react';
import Button from '@atlaskit/primitives/pressable';
import Todo from './Todo';

export default function TodoList({ todoList = [] }) {
    return (
        <>
            {
                todoList.length > 0 ? (
                    todoList.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                ) : (
                    <p>No todos available</p>
                )
            }
            
            <Todo />
            <Todo />
            <Todo />
        </>
    );
}
