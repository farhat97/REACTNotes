import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import Header from './Components/Layouts/Header';
import About from './Components/Pages/About';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Todo1',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Todo2',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Todo3',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log('clicked on id: ', id);

    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      
      return todo;
    }) });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})
  }

  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    console.log(this.state.todos);
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            
            <Route exact path="/" render={props => (
              <React.Fragment>
                
                <AddTodo addTodo={this.addTodo}/>
                
                <Todos todos={this.state.todos} 
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}/>
              
              </React.Fragment>
            )} />
            
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
