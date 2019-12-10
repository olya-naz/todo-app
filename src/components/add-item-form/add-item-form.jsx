import React, { Component } from 'react';
import { Form, Input, Button } from '../formStyles';

export default class AddItemForm extends Component {
    state = {
      title: ''
    };

    handleInputChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            title: ''
        });

        this.props.onAddItem(this.state.title);
    };

    render() {
        const { title } = this.state;
        return(
            <div className="new-item-list">
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text"
                           value={title}
                           placeholder="Type your task"
                           onChange={this.handleInputChange}/>
                    <Button>Add task</Button>
                </Form>
            </div>
        )
    }
};