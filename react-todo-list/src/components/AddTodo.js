import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          onClick={this.onSubmit}
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
