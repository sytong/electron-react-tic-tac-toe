import React, { Component } from 'react';
import styles from './Square';

export default class Square extends Component {
  constructor() {
    super();
    this.props = {
      value: null,
    };
  }

  props: {
    value: number,
    onClick: () => void
  };

  render() {
    return (
      <button className={styles.square} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
