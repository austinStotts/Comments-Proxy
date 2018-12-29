import React, { PureComponent } from 'react';
import Radium from 'radium';
import styles from '../styles';
import Button from './button';

class Option extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      o1: false,
      o2: false
    }
  }

  render () {
    return (
      <div>
        <Button text={this.props.o1}/>
        <Button text={this.props.o2}/>
      </div>
    )
  }
}

Option = Radium(Option);
export default Option;