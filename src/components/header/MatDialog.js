import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Form from './Form';


const customStyle = {
    height: 'auto',
    width: '40%'
}

class MatDialog extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                onClick={this.handleClose}
            />,
            <FlatButton
                label={this.props.btntext == "Update" ? "Update" : "Add"}
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label={this.props.btntext} onClick={this.handleOpen} primary={true} />
                <Dialog
                    title={this.props.btntext}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={customStyle}
                >
                    <div>
                        <Form user={this.props.user} />
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default MatDialog; 