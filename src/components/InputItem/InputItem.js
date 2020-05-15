import React from 'react';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styles from './InputItem.module.css';

const InputItem = () => (<p className={styles.wrap}>
	<TextField className={styles.input}
		id="standard-basic" 
		label="Новое дело" 
	/>
	<Fab size="small" color="secondary" aria-label="add">
    <AddIcon />
  </Fab>
</p>);

export default InputItem;