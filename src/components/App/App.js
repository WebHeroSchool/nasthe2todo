import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import About from '../About/About';
import Todo from '../Todo/Todo';

import styles from './App.module.css';

const theme = createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        fontSize: '26px'
      }
    }
  }
});

const App = () => (
  <Router>
    <div className={styles.app}>
      <MenuList className={styles.menu}>
        <ThemeProvider theme={theme}>
          <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
          <Link to='/todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
        </ThemeProvider>
      </MenuList>
      <Card> 
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
      </Card>
    </div>
  </Router>
);

export default App;