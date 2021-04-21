import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    firstname: "",
    firstnameError: "",
    lastname: "",
    lastnameError: "",
    email: "",
    emailError: "",
    occupation:"",
    occupationError:"",
    city:"",
    cityError:"",
    bio:"",
    bioError:""
  };

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      occupationError: "",
      cityError: "",
      bioError:""
    };

     if (this.state.firstname.length < 2) {
       isError = true;
      errors.firstnameError = "firstname needs to be atleast 2 characters long";
     }
     if (this.state.lastname.length < 2) {
      isError = true;
     errors.lastnameError = "lastname needs to be atleast 2 characters long";
    }
    
    
    
    
    
     if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
     this.props.onSubmit(this.state);
     
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstname: "",
        firstnameError: "",
        lastname: "",
        lastnameError: "",
        email: "",
        emailError: "",
        occupation:"",
        occupationError:"",
        city:"",
        cityError:"",
        bio:"",
        bioError:""
      });
     
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="firstname"
          hintText="First name"
          floatingLabelText="First name"
          value={this.state.firstname}
          onChange={e => this.change(e)}
          errorText={this.state.firstnameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastname"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastname}
          onChange={e => this.change(e)}
          errorText={this.state.lastnameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="occupation"
          hintText="occupation"
          floatingLabelText="Occupation"
          value={this.state.occupation}
          onChange={e => this.change(e)}
          errorText={this.state.occupationError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="city"
          hintText="city"
          floatingLabelText="City"
          value={this.state.city}
          onChange={e => this.change(e)}
          errorText={this.state.cityError}
          floatingLabelFixed
        />
        <br />

        <TextField
          name="bio"
          hintText="bio"
          floatingLabelText="Bio"
          value={this.state.bio}
          onChange={e => this.change(e)}
          errorText={this.state.bioError}
          floatingLabelFixed
        />
        <br />
        
        
        
        
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}