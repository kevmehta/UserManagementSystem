import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import MatDialog from './MatDialog';

class MatToolbar extends React.Component {

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text={this.props.title} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarSeparator />
                    <MatDialog
                        btntext={"Add User"}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default MatToolbar;