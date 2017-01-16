import React, { Component } from 'react';
import styles from './Square';

export default class Square extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className={styles.square} onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}
