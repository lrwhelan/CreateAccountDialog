import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import DialogCheckbox from './DialogCheckbox';


class CreateAccountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='create-account-form' style={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                  label='Email'
                  placeholder='example@gmail.com'
                  margin='normal'
                  variant='outlined'
                />
                <TextField
                  label='Username'
                  placeholder='Username'
                  margin='normal'
                  variant='outlined'
                />
                <TextField
                  label='Password'
                  placeholder='Password'
                  margin='normal'
                  variant='outlined'
                  type='password'
                />
                <TextField
                  label='Re-enter Password'
                  placeholder='Password'
                  margin='normal'
                  variant='outlined'
                  type='password'
                />
                <div style={{paddingTop: '1rem'}}>
                    <DialogCheckbox label='Subscribe to our email updates.' />
                </div>
            </div>
        );
    }
}

export default CreateAccountForm;
