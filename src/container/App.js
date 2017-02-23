import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeTodoText } from '../actions'
import TodoList from '../components/TodoList';
import TodoTextInput from '../components/TodoTextInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
  }

  handleTodoTextChange(event) {
    console.log("App.handleTodoTextChange", event.target.value);
    this.props.dispatch(changeTodoText(event.target.value));
  }

  render() {
    return (
      <div>
        <div>Todo MVC Container</div>
        <TodoList todos={ this.props.todos }/>
        <TodoTextInput handleTodoTextChange={ this.handleTodoTextChange } todo={ this.props.currentToDo } text={ this.props.todoToEdit && this.props.todoToEdit.text || "stub" } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentToDo: state.currentToDo,
    todos: state.todos
  }

  App.propTypes = {
    currentToDo: propTypes.object.isRequired
  }
}

export default connect(mapStateToProps)(App);
