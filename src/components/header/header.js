import React, { Component } from 'react';
import MatToolbar from './MatToolbar';

class Header extends Component {
    render() {
        return (
            <div>
                <MatToolbar title={"User Management System"} />
            </div>
        );

    }
}

export default Header;