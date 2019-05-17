import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';


class DialogCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox color='primary' />
                { this.props.label }
            </div>
        );
    }
}

export default DialogCheckbox;
