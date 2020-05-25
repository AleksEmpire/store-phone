import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grant_type: "Bearer",
      email: "",
      pass: "",
      token: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log("form");
    let setUser = `grant_type=${this.state.grant_type}&email=${this.state.email}&password=${this.state.pass}`;
    //console.log(user);
    axios
      .post(`http://www.scripttic.com:8000/oauth2/token`, setUser, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;",
        },
      })
      .then((res) => {
        //user.token = res
        this.setState({ token: res });
        localStorage.setItem("setItemUser", JSON.stringify(res.data));
        this.checkLoginStatus();
      }) //API
      .catch((error) => {
        console.log("login Error: ", error);
      });
    event.preventDefault();
  };
  checkLoginStatus = () => {
    const token = localStorage.getItem("setItemUser");
    if (token) {
      axios
        .get(`http://www.scripttic.com:8000/api/v1/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then(() => {
          console.log("Logged: TRUE");
        }) //API
        .catch((error) => {
          console.log("login Error: ", error);
        });
    }
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
            type="password"
            name="pass"
            placeholder="Password"
            value={this.state.pass}
            onChange={this.handleChange}
            required
          />

          <button
            type="submit"
            onClick={() => {
              this.props.handleLoginClick();
              this.checkLoginStatus();
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
