// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router';
import Game from './Game';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Game />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
