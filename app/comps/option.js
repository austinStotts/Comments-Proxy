import React, { PureComponent } from 'react';
import Radium from 'radium';
import styles from '../styles';

class Option extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h3>sex:</h3>
        <h4>Male</h4>
        <h4>Female</h4>
      </div>
    )
  }
}

Option = Radium(Option);
export default Option;