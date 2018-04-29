import React, { Component } from 'react';

const dateConverter = (date) => {
    let tmp = new Date(date);
    let day = tmp.getDate();
    let month = tmp.getMonth() + 1;
    let year = tmp.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    let dob = month + '/' + day + '/' + year;

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
            </div>
        );

    }
}

export default Details;