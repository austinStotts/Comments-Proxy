import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './comps/button';
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
    //this.getPet()
    window.setInterval(() => {
      this.setState(_=> {
        return {number:1}
      });
    },500)
  } 

  render () {
    console.log("RENDER !!")
    return (
      <div> 
        <h1>{this.state.number}</h1>
        <span>
        <Button text={'buy'} function={()=>{console.log('click')}}/>
        <Button text={'more'} function={_=>console.log('more!')}/>
        </span>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));