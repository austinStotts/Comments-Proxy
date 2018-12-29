import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './comps/button';
import Link from './comps/link';
import Buy from './comps/buy';
import Title from './comps/title';
import Axios from 'axios';
import styles from './styles';
import Radium from 'radium';
import Disclaimer from './comps/disc';
import Options from './comps/options';

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      pet_id: "2111",
      pet: {
        "pet_id":"2111",
        "class":"Aves",
        "family":"Struthionidae",
        "genus":"Struthio",
        "species":"Ostrich",
        "price":"11,000",
      },
    };

    // bind(this);
    this.getPet = this.getPet.bind(this);
    this.print = this.print.bind(this);
    // *** *** *** *** *** *** *** *** ***

  }

  getPet () { // server get request for pet object
    Axios.get('http://localhost:4000/buy', {
      headers: {
        "pet_id":this.state.pet_id
      }
    })
    .then(res => {
      this.setState({
        pet:res.data
      })
    })
  }

  print (text) { // print function
    console.log(text);
  }

  render () {
    return (
      <div>
        <Title pet={this.state.pet}/>
        <Options show={this.showOptions}/>
        <Buy price={this.state.pet.price} func={this.print}/>
        <Disclaimer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));