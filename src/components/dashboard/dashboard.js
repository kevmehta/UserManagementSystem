import React, { Component } from 'react';
import MatTable from './MatTable';


const headers = [
    {
        name: "Name",
        prop: "name"
    },
    {
        name: "Email ID",
        prop: "email"
    },
    {
        name: "Mobile Number",
        prop: "phone"
    },
    {
        name: "Date Of Birth",
        prop: "dob"
    },
    {
        name: "Age",
        prop: "age"
    },
    {
        name: "Active",
        prop: "active"
    },
    {
        name: "Action",
        prop: "action"
    }
]

class Dashboard extends Component {

    state = {
        data: [
            {
                name: "Paul Adam",
                email: "paul.adam@abc.com",
                phone: 1234567890,
                dob: 271708200,
                active: true
            },
            {
                name: "Greg William",
                email: "gregl.will@abc.com",
                phone: 1234567890,
                dob: 36087300,
                active: false
            },
            {
                name: "Charles Fernandes",
                email: "charles@abc.com",
                phone: 9221133547,
                dob: 346357800,
                active: true
            }
        ]
    };

    render() {
        return (
            <div>
                <MatTable
                    headers={headers}
                    data={this.state.data}
                />
            </div>
        );

    }

}

export default Dashboard;