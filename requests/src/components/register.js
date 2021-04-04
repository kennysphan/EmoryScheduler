import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class Register extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  username: "",
	  password: "",
	  email:""
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A username, email, and password was submitted: ' + this.state.username + " " + this.state.password + " " + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Register</h3>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
			  <Form>
				<FormGroup>
				  <Label for="username">Username</Label>
				  <Input
					type="text"
					id="username"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
					placeholder="Enter username"
				  />
				</FormGroup>
				<FormGroup>
				  <Label for="email">Email</Label>
				  <Input
					type="email"
					id="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="Enter email"
				  />
				</FormGroup>
				<FormGroup>
				  <Label for="password">Password</Label>
				  <Input
					type="password"
					id="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					placeholder="Enter password"
				  />
				</FormGroup>
				<Button
				  color="success"
				  onClick={this.handleSubmit}
				>
				  Submit
				</Button>
			  </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Register;