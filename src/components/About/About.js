import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import { Octokit } from '@octokit/rest';

import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component{
  state = {
    isLoading: true,
    repoList: [],
    requestFailed: false,
    error: {}
  };

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: 'nasthe2'
      })
      .then(({ data }) => {
        this.setState({
          repoList: data,
          isLoading: false,
          avatarUrl: data[0].owner.avatar_url,
          login: data[0].owner.login
        })
      })
      .catch(err => 
        this.setState({
          requestFailed: true,
          isLoading: false,
          error: err
        })
      )
  }

  render() {
    const { isLoading, repoList, requestFailed, error, avatarUrl, login } = this.state;

    return (
      <div className={styles.wrap}>
        <CardContent>
          {requestFailed && (
            <div className={styles.error}>
              <div>{error.name}</div>
              <div>{error.message}</div>
            </div>
          )}

          { isLoading && <CircularProgress /> }
          
          {
            !isLoading && repoList.length ?
              <div>
                <Avatar
                  alt={repoList.username}
                  src={avatarUrl}
                />
                <h5>{login}</h5>
              </div>
            :
              <div></div>
          }

          {
            !isLoading && repoList.length ?
              <ul>
                {
                  repoList.map(repo => (
                    <li key={repo.id}>
                      <a href={repo.html_url} className={styles.link}>
                        {repo.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            :
              <div></div>
          }
          
        </CardContent>
      </div>
    )
  }
}

export default About;