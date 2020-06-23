import React from 'react';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import PropTypes from 'prop-types';
import styles from './InputItem.module.css';


class InputItem extends React.Component {
  state = {
    inputValue: '',
    helperText: '',
    error: false
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        helperText: 'Задание не может быть пустым!', 
        error: true
      })
    }	
  }

  render() {
    const { onClickAdd } = this.props;

    return(
      <p className={styles.wrap}>
        <TextField className={styles.input}
          id='standard-basic' 
          label='Новое дело' 
          value={this.state.inputValue}
          onChange={event => this.setState({ 
            inputValue: event.target.value,
            helperText: '',
            error: false
          })}
          helperText={this.state.helperText}
          error={this.state.error}
        />
      <Fab size='small' color='secondary' aria-label='add'>
        <AddIcon onClick={this.onButtonClick} />
      </Fab>
      </p>
    )
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;