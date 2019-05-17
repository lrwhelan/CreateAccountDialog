import React, { Component } from 'react';
import { Dialog } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CreateAccountForm from './CreateAccountForm';


class CreateAccountDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <Dialog open={this.props.open} onClose={this.props.dialogClose}>
                <div style={{height: '31rem', width: '25rem', padding: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                        <div style={{fontSize: '1.3rem', paddingBottom: '1rem'}}>
                            Create Account
                        </div>
                        <IconButton style={{padding: '0'}} onClick={this.props.dialogClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <CreateAccountForm />
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
                        <Button variant="outlined" onClick={this.props.dialogClose}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={this.props.dialogClose}>Create</Button>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default CreateAccountDialog;
