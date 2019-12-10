import React from 'react';
import { Label, IconCheck } from '../formStyles';
import styled from 'styled-components';

const ItemList = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    list-style-type: none;
    border-top: 2px solid #f4f6fb;
    padding: 14px 20px;
    @media (max-width: 767px) {
        padding: 14px 10px;
    }
`;
const IconEdit = styled.i`
    font-size: 18px;
    color: #a7a7a7;
    cursor: pointer;
    margin-left: 15px;
    transition: all .3s ease;
    &:hover {
        color: ${props => props.delete ? "#f80c0c" : "#302c83"};
    }
`;
const ToggleDisabled = styled.div`
    pointer-events: ${props => props.disabled ? "none": "all"};
    opacity: ${props => props.disabled ? ".4": "1"};
`;

const TodoItem = ({ title, completed, edit, handleComplete, handleEdit, handleDelete }) => {
    const activeClass = completed ? 'active' : '';
    const disabledButtons = edit ? 'disabled' : '';
    return(
        <ItemList>
            <Label className={activeClass}
                   onClick={handleComplete}
                   completed={ !!completed }>
                <IconCheck className="fa fa-check" />
                <span>{title}</span>
            </Label>
            <ToggleDisabled disabled={disabledButtons}>
                <button onClick={handleEdit}>
                    <IconEdit className="fa fa-edit" />
                </button>
                <button onClick={handleDelete}>
                    <IconEdit delete className="fa fa-trash-o" />
                </button>
            </ToggleDisabled>
        </ItemList>
    )
};

export default TodoItem;