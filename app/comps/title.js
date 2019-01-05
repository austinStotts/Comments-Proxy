// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Radium from 'radium';
// React components from files
import Button from './button';
import Link from './link';
import styles from '../styles';

// Displays item details much like a title
class Title extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      class: 'none',
      family: 'none',
      genus: 'none',
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show (text) {
    if(text === 'class') this.setState({class: 'inline-block'});
    else if(text === 'family') this.setState({family: 'inline-block'});
    else if(text === 'genus') this.setState({genus: 'inline-block'});
  }

  hide (text) {
    if(text === 'class') this.setState({class: 'none'});
    else if(text === 'family') this.setState({family: 'none'});
    else if(text === 'genus') this.setState({genus: 'none'});
  }


  render () {
    return (
      <div style={[styles.titleDiv.base]}>
        <div style={[styles.infoDiv.base]} >
          <div style={{display:'inline-block'}} onMouseLeave={_=>this.hide('class')} onMouseEnter={_=>this.show('class')}><Link text={this.props.pet.class} special={{fontSize:'16px'}} specialDiv={{margin:'0%',display:'inline-block'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.class}`}/></div>
          <h1 style={[styles.info.base, {display:this.state.class}]}>{'class'}</h1>
        </div>
        <div>
          <div style={{display:'inline-block'}} onMouseLeave={_=>this.hide('family')} onMouseEnter={_=>this.show('family')}><Link text={this.props.pet.family} special={{fontSize:'16px'}} specialDiv={{margin:'0%',display:'inline-block'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.family}`}/></div>
          <h1 style={[styles.info.base, {display:this.state.family}]}>{'family'}</h1>
        </div>
        <div>
          <div style={{display:'inline-block'}} onMouseLeave={_=>this.hide('genus')} onMouseEnter={_=>this.show('genus')}><Link text={this.props.pet.genus} special={{fontSize:'16px'}} specialDiv={{margin:'0%',display:'inline-block'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.genus}`}/></div>
          <h1 style={[styles.info.base, {display:this.state.genus}]}>{'genus'}</h1>
        </div>
          <Link text={this.props.pet.species} special={{fontSize:'27px'}} specialDiv={{margin:'0%',display:'inline-block'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.species}`}/>
      </div>
    )
  }
}

Title = Radium(Title);
export default Title;
