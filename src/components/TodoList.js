import React, { Component, PropTypes } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("App", this.props.todos);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Completed</th>
              <th>Task</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map((todo, index) => {
                return (
                  <tr key={index}>
                    <td><input type="checkbox" checked={ todo.completed }/></td>
                    <td>{ todo.text }</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
