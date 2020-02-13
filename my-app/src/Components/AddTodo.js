import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    onSubmit = (e) => {
        // prevent default -> prevent submission "to the file"
        e.preventDefault();
        this.props.addTodo(this.state.title);

        // clear field
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} sytle={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange} 
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}} 
                />
            </form>
        )
    }
}

export default AddTodo
