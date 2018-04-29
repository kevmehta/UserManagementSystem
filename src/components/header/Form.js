import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from 'material-ui/DatePicker';


class Form extends React.Component {
    state = {
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        phone: "",
        dob: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            nameError: "",
            emailError: ""
        };

        if (this.state.firstName == "") {
            isError = true;
            errors.nameError = "Please enter a valid Name.";
        }

        if (this.state.email.indexOf("@") === -1 || this.state.email == "") {
            isError = true;
            errors.emailError = "Please provide a valid email.";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    render() {
        return (
            <form>
                <TextField
                    name="name"
                    floatingLabelText="Name"
                    value={this.props.user == undefined ? this.state.name : this.props.user.name}
                    onChange={e => this.change(e)}
                    errorText={this.state.nameError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="email"
                    floatingLabelText="Email ID"
                    value={this.props.user == undefined ? this.state.email : this.props.user.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="mobile"
                    floatingLabelText="Mobile Number"
                    value={this.props.user == undefined ? this.state.phone : this.props.user.phone}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <DatePicker
                    name="dob"
                    floatingLabelText="Date Of Birth"
                    // value={this.state.dob}
                    // onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                {/* <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary /> */}
            </form>
        );
    }
}

export default Form;
