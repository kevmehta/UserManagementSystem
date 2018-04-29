import React, { Component } from 'react';
import MatTable from './MatTable';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import superagent from 'superagent';
import orderBy from "lodash/orderBy";


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
            apidata: '',
            query: '',
            columnToQuery: 'name'
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
        const lowerCaseQuery = this.state.query.toLowerCase();
        if (this.state.apidata) {
            return (
                <div>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", margin: "auto" }}>
                            <TextField
                                floatingLabelText="Search"
                                value={this.state.query}
                                onChange={e => this.setState({ query: e.target.value })}
                                floatingLabelFixed
                            />
                            <SelectField
                                style={{ marginLeft: "1em" }}
                                floatingLabelText="Column to search in"
                                value={this.state.columnToQuery}
                                onChange={(event, index, value) =>
                                    this.setState({ columnToQuery: value })
                                }
                            >
                                <MenuItem value="name" primaryText="Name" />
                                <MenuItem value="email" primaryText="Email ID" />
                            </SelectField>
                        </div>
                    </div>
                    <div>
                        <MatTable
                            headers={headers}
                            data={orderBy(
                                this.state.query ?
                                    this.state.apidata.filter(x =>
                                        x[this.state.columnToQuery]
                                            .toLowerCase()
                                            .includes(lowerCaseQuery)
                                    )
                                    : this.state.apidata
                            )}
                        />
                    </div>
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