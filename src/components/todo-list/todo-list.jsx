import React from 'react';
import styled from 'styled-components';
import TodoItem from "../todo-item/todo-item";

const ItemList = styled.li`
    border-top: 2px solid #f4f6fb;
    padding: 14px 49px;
    @media (max-width: 767px) {
        padding: 14px 39px;
    }
`;

const TodoList = ({ data, edit, handleComplete, handleEdit, handleDelete }) => {
    const list = data.map(item => {
        const { id, title } = item;

        return(
            <TodoItem key={id}
                      edit={edit}
                      {...item}
                      handleComplete={() => handleComplete(id)}
                      handleEdit={() => handleEdit(id, title)}
                      handleDelete={() => handleDelete(id)}  />
        )
    });
    return(
        <div className="todo-list">
            <ul>
                {list.length > 0 ? list : <ItemList>No tasks</ItemList>}
            </ul>
        </div>
    )
};

export default TodoList;