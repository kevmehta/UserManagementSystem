import React, { Component } from 'react';
import MatTable from './MatTable';
import superagent from 'superagent';


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

    constructor() {
        super()
        this.state = {
            apidata: ''
        }
    }

    componentDidMount() {
        const url = "https://api.myjson.com/bins/pkisp";

        superagent
            .get(url)
            .query(null)
            .set('Accept', 'application/json')
            .end((error, response) => {
                const dataFromApi = response.body;
                const transformData = [];

                dataFromApi.users.forEach(user => {
                    transformData.push({
                        name: user.first_name + ' ' + user.last_name,
                        email: user.email,
                        phone: user.phone,
                        dob: user.dob,
                        active: user.active
                    });
                });

                this.setState({
                    apidata: transformData
                })
            })
    }

    render() {
        if (this.state.apidata) {
            return (
                <div>
                    <MatTable
                        headers={headers}
                        data={this.state.apidata}
                    />
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }

    }

}

export default Dashboard;