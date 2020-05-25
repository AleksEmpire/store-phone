import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      pass: "",
      pass_confirmation: "",
      registrationErrors: " ",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log("form");

    const user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      pass: this.state.pass,
      //pass_confirmation: this.state.pass_confirmation
    };
    console.log(user);
    axios
      .post(`http://www.scripttic.com:8000/api/v1/user`, user)
      .then((res) => {
        if (res) {
          this.props.handleSuccessAuth(res);
          console.log("Response: ", res);
          console.log("Response data: ", res);
        }
      }) //API
      .catch((error) => {
        console.log("Registration Error: ", error);
      });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={this.state.pass}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
