import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px 20px 13px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    border-radius: 4px;
    color: ${props => props.active ? "#302c83" : "#928fd3"};
    background-color: ${props => props.active ? "#fff" : "transparent"};
    cursor: pointer;
    transition: all .3s;
    &:hover {
        color: #302c83;
    }
    @media (max-width: 767px) {
        padding: 7px 16px 10px;
    }
`;
const Amount = styled.sup`
    padding-left: 3px;
`;


const FilterButtons = ({ activeFilter, handleFilter, totalCount, completedCount }) => {
    const buttons = [
        {
            id: 'all',
            title: 'All',
            amount: totalCount
        },
        {
            id: 'active',
            title: 'Active',
            amount: totalCount - completedCount
        },
        {
            id: 'completed',
            title: 'Completed',
            amount: completedCount
        }
    ];
    return(
        <div className="filter-tab">
            { buttons.map(({ id, title, amount }) => {
                return (
                    <Button key={id}
                            id={id}
                            className={id === activeFilter ? 'active' : ''}
                            active={id === activeFilter}
                            onClick={handleFilter} >
                        {title}
                        <Amount>{amount}</Amount>
                    </Button>
                )})
            }
        </div>
    )
};

export default FilterButtons;