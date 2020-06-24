import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

import Contacts from '../Contacts/Contacts';

import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component{
  state = {
    isLoading: true,
    repoList: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'nasthe2'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading, repoList } = this.state;

    return (
      <div>
        <CardContent>
          <Contacts />
        </CardContent>
        <CardContent>
          <h5 className={styles.repoHeader}>{ isLoading ? <CircularProgress /> : 'Мои репозитории' }</h5>
          {
            !isLoading && <ol>
              {
                repoList.map(repo => (
                  <li key={repo.id}>
                    {repo.name}
                  </li>
                ))
              }
            </ol>
          }
        </CardContent>
      </div>
    )
  }
}

export default About;