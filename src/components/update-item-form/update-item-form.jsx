import React, { Component } from 'react';
import { Form, Button } from '../formStyles';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: calc(100% - 110px);
    display: inline-block;
    vertical-align: top;
    border: none;
    box-shadow: none;
    background-color: #F9F9F9;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
    padding: 0 12px;
    height: 34px;
    margin-right: 10px;
    &::placeholder {
        color: #757575;
    }                                   
    @media (max-width: 767px) {
        width: calc(100% - 44px);
    }
`;
const UpdateButton = styled(Button)`
    @media (max-width: 767px) {
        &:after {
            content: '\f021';
        }
    }
`;

export default class UpdateItemForm extends Component {
    inputRef = React.createRef();

    componentDidMount(){
        this.inputRef.current.focus();
    }
    HandleSubmit = (e) => {
        e.preventDefault();

        this.props.onEditItem(e.target.updatedInput.value);
    };
    render() {
        return(
            <div className="new-item-list">
                <Form onSubmit={ this.HandleSubmit }>
                    <StyledInput type="text"
                           defaultValue={this.props.editTitle}
                           name="updatedInput"
                           ref={ this.inputRef } />
                    <UpdateButton update>Update task</UpdateButton>
                </Form>
            </div>
        )
    }
};