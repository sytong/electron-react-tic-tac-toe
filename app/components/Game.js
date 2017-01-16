import React, { Component } from 'react';
import Board from './Board';
import styles from './Game.css';

export default class Game extends Component {
  render() {
    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={styles['game-info']}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
