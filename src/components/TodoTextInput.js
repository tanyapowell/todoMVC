import React, { Component, PropTypes } from 'react';

export default class TodoTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <input type="text" value={ this.props.todo && this.props.todo.text } onChange={ this.props.handleTodoTextChange }/>
    )
  }
}

TodoTextInput.propTypes = {
  text: PropTypes.object.isRequired,
  handleTodoTextChange: PropTypes.func.isRequired
};
