import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './comps/button';
import Link from './comps/link';
import Axios from 'axios';
import styles from './styles';
import Radium from 'radium';

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      pet_id: "1113",
      pet: '',
      number: ''
    }
    this.ids = ['1113','1126','12210','12213','12217','13122'];
    this.getPet = this.getPet.bind(this);
  }

  getPet () {
    Axios.get('http://localhost:4000/buy', {
      headers: {
        "pet_id":this.state.pet_id
      }
    })
    .then(res => {
      this.setState(() => {
        return {pet:res.data}
      })
    })
  }

  componentDidMount () {
    this.getPet();
  }

  render () {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <span>
          <Button width={'100px'} height={'40px'} text={'buy'} func={_=>{this.getPet(this.ids[Math.floor(Math.random*this.ids.length)])}}/>
          <Button text={'more'} func={_=>console.log('more!')}/>
          <Link text={'here'} size={'40px'} func={_=>console.log('zelda')}/>
          <Link text={'where'} func={_=> console.log('WWW')}/>
          <h1>{this.state.pet.species}</h1>
        </span>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));