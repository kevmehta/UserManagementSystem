import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import MatDialog from '../header/MatDialog';


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

const agecalculator = (date) => {
    let dob = new Date(date);
    let today = new Date();

    let timeDiff = Math.abs(today.getTime() - dob.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return (diffDays * 0.00273973).toFixed(1);
}

const styles = {
    thumbon: {
        backgroundColor: 'green',
    },
    trackon: {
        backgroundColor: 'green',
    },
    thumboff: {
        backgroundColor: 'red',
    },
    trackoff: {
        backgroundColor: 'red',
    },
};

class MatTable extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        {
                            this.props.headers.map((header, idx) =>
                                <TableHeaderColumn key={idx}>{header.name}</TableHeaderColumn>)
                        }
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.props.data.map((rowData, idx) =>
                            <TableRow key={idx} background-color="green">
                                <TableRowColumn>
                                    <a href="/#">
                                        {rowData.name}
                                    </a>
                                </TableRowColumn>
                                <TableRowColumn>{rowData.email}</TableRowColumn>
                                <TableRowColumn>{rowData.phone}</TableRowColumn>
                                <TableRowColumn>{dateConverter(rowData.dob)}</TableRowColumn>
                                <TableRowColumn>{agecalculator(rowData.dob)}</TableRowColumn>
                                <TableRowColumn>
                                    <Toggle
                                        defaultToggled={rowData.active}
                                        thumbSwitchedStyle={styles.thumbon}
                                        trackSwitchedStyle={styles.trackon}
                                        thumbStyle={styles.thumboff}
                                        trackStyle={styles.trackoff}
                                    />
                                </TableRowColumn>
                                <TableRowColumn>
                                    <MatDialog
                                        btntext={"Update"}
                                        user={rowData}
                                    />
                                </TableRowColumn>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        );
    }
}

export default MatTable;