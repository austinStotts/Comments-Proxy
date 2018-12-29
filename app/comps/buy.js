import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Link from './link';
import Title from './title';
import Axios from 'axios';
import styles from '../styles';
import Radium from 'radium';
import Price from './price';

class Buy extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <span>
        <Price price={this.props.price}/>
        <Button text={'buy'} func={_=>this.props.func('buy')}/>
      </span>
    )
  }
}

export default Buy;