import React from "react";
import axios from "axios";

export class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubblePage");
      })
      .catch((err) => console.error(err, "you done screwed up, son!"));
  };

  render() {
    return (
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <div className="user-box">
            <label>
              {""}
              Username
              <input
                value={this.state.credentials.username}
                onChange={this.handleChange}
                name="username"
                type="text"
              />
            </label>
          </div>
          <div className="user-box">
            <label>
              {""}
              Password
              <input
                value={this.state.credentials.password}
                onChange={this.handleChange}
                name="password"
                type="password"
              />
            </label>
          </div>

          <button>Sign In</button>
        </form>
      </div>
    );
  }
}
export default Login;
