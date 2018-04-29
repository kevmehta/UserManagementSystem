import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const dateConverter = (date) => {
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let tmp = new Date(date);
    let day = tmp.getDate();
    let month = monthArr[tmp.getMonth()];
    let year = tmp.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    let dob = day + ' ' + month + ' ' + year;

    return dob;
}

class Details extends Component {

    render() {
        const user = this.props.location.state.user;
        return (
            <div>
                <span>
                    <label> Name: </label>
                    {user.name}
                </span>
                <br />
                <span>
                    <label> Emaild ID: </label>
                    {user.email}
                </span>
                <br />
                <span>
                    <label> Mobile Number: </label>
                    {user.phone}
                </span>
                <br />
                <span>
                    <label> Date of Birth: </label>
                    {dateConverter(user.dob)}
                </span>
                <br />
                <span>
                    <label> Active: </label>
                    {user.active ? 'Active' : 'Inactive'}
                </span>
                <br />

                <Link to={{ pathname: '/' }}>
                    <FlatButton
                        label="Back"
                        primary={true}
                    />
                </Link>
            </div>
        );

    }
}

export default Details;