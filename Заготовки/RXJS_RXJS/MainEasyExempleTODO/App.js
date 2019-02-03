import React, { Component } from 'react';
import { Subject } from 'rxjs';
const createTodo = new Subject();
const currentInput = new Subject();
const updateTodo = new Subject();
const deleteTodo = new Subject();

class App extends Component {
  state = {
    todos: [],
    input: '',
  };

  componentDidMount () {
    createTodo.subscribe(() => {
      this.setState({
        input: '',
        todos: this.state.todos.concat({
          text: this.state.input,
          done: false,
        }),
      });
    });

    currentInput.subscribe(input => this.setState({ input }));

    deleteTodo.subscribe(index => {
      console.log(index, this.state.todos);
      this.setState({ todos: this.state.todos.filter((_, _index) => index !== _index) });
    });

    updateTodo.subscribe(({ index, ...obj }) => {
      this.state.todos[index] = Object.assign({}, this.state.todos[index], obj);
      this.setState({ todos: this.state.todos });
    });
  }
  render () {
    return (
      <div className='App-intro'>
        <input
          type='text'
          autoFocus
          placeholder='Type in something to do.'
          value={this.state.input}
          onChange={e => currentInput.next(e.target.value)}
        />
        <button onClick={() => createTodo.next()}>Add to list</button>
        <ul>
          {this.state.todos.map(({ text, done }, index) => {
            return (
              <li key={index}>
                <input
                  onChange={() => updateTodo.next({ index, done: !done })}
                  checked={done}
                  type='checkbox'
                  value=''
                />
                {
                  done === true ? <strike>{text}</strike> :
                  text}
                <button onClick={() => deleteTodo.next(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
