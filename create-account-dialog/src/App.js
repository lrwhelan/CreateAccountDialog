import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import CreateAccountDialog from './CreateAccountDialog';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false
    }
  }

  handleButtonClick = () => {
    this.setState({openDialog: true});
  };

  handleDialogClose = () => {
    this.setState({openDialog: false});
  };

  render() {
    return (
      <div className='App' style={{padding: '10rem 0 0 0', display: 'flex', justifyContent: 'center'}}>
        <Button variant='outlined' onClick={this.handleButtonClick}>Create Account</Button>
        <CreateAccountDialog open={this.state.openDialog} dialogClose={this.handleDialogClose} />
      </div>
    );
  }
}

export default App;
