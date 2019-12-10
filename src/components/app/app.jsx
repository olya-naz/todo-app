import React, { Component } from 'react';
import styled from 'styled-components';
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import AddItemForm from "../add-item-form/add-item-form";
import UpdateItemForm from "../update-item-form/update-item-form";
import FilterButtons from "../filter-buttons/filter-buttons";
import ManageComplete from '../manage-complete-buttons/manage-complete-buttons';

import './app.css';

const Wrapper = styled.div`
    width: 830px;
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 15px;
    @media (max-width: 767px) {
        padding: 30px 15px;
    }
`;
const TopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-left: 20px;
    @media (max-width: 767px) and (orientation: portrait) {
        display: block;
        margin-bottom: 20px;
        padding-left: 10px;
    }
`;
const ContentBlock = styled.div`
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
`;

const data = [
        {
            id: 1,
            title: "Delectus aut autem",
            completed: false
        },
        {
            id: 2,
            title: "Quis ut nam facilis et officia qui",
            completed: false
        },
        {
            id: 3,
            title: "Molestiae ipsa aut voluptatibus pariatur dolor nihil",
            completed: true
        }
    ];

export default class App extends Component {
    state = {
        data: data,
        activeFilter: 'all',
        edit: false,
        editId: null,
        editTitle: ''
    };

    handleComplete = (id) => {
        const { data } = this.state;
        const index = data.findIndex(item => item.id === id);
        data[index].completed = !data[index].completed;
        this.setState({
            data,
            edit: false
        });
    };
    handleDelete = (id) => {
        this.setState({
            data: this.state.data.filter(item => item.id !== id)
        });
    };
    handleFilter = (e) => {
        this.setState({
            activeFilter: e.target.getAttribute("id")
        });
    };
    handleDataFilter() {
        const { data, activeFilter } = this.state;
        switch(activeFilter) {
            case 'all' : return data;
            case 'completed': return data.filter(item => item.completed);
            case 'active': return data.filter(item => !item.completed);
            default: return data;
        }
    };
    handleAddItem = (title) => {
        const renderId = + new Date();
        const newItem = {
            id: renderId,
            title: title,
            completed: false
        };
        newItem.key = renderId;

        if(title.length !== 0) {
            this.setState({
                data: [newItem, ...this.state.data]
            });
        }
    };
    handleCheck = () => {
        this.setState({
            data: this.state.data.map(item => {
                item.completed = true;
                return item;
            })
        });
    };
    handleClear = () => {
        this.setState({
            data: this.state.data.filter(item => !item.completed)
        });
    };
    handleEdit = (id, title) => {
        this.setState({
            edit: true,
            editId: id,
            editTitle: title
        });


    };
    handleUpdate = (title) => {
        const { data, editId } = this.state;
        const index = data.findIndex(item => item.id === editId);
        const oldItem = data[index];
        const newItem = {...oldItem, title: title};
        this.setState({
            data: [
                ...this.state.data.slice(0, index),
                newItem,
                ...this.state.data.slice(index+1)
            ],
            edit: false
        });
    };

    render() {
        const { data, activeFilter, edit, editTitle } = this.state;
        const totalCount = data.length;
        const completedCount = data.filter(item => item.completed).length;
        let filteredData = this.handleDataFilter();

        return(
            <Wrapper>
                <TopBlock>
                    <Header />
                    <FilterButtons activeFilter={activeFilter}
                                   handleFilter={this.handleFilter}
                                   totalCount={totalCount}
                                   completedCount={completedCount} />
                </TopBlock>
                <ContentBlock>
                    { edit ?
                        <UpdateItemForm onEditItem={this.handleUpdate}
                                        editTitle={editTitle} />
                        : <AddItemForm onAddItem={this.handleAddItem} />
                    }
                    <TodoList data={filteredData}
                              edit={edit}
                              handleComplete={this.handleComplete}
                              handleEdit={this.handleEdit}
                              handleDelete={this.handleDelete} />
                </ContentBlock>
                <ManageComplete handleCheck={this.handleCheck}
                                handleClear={this.handleClear}
                                totalCount={totalCount}
                                completedCount={completedCount} />
            </Wrapper>
        )
    }
};