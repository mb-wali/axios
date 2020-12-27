import React from "react";
import axios from "axios";

export default class PersonPost extends React.Component {
  state = {
    name: ""
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(process.env.POST_JSON_URL, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
      alert("Created", res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
