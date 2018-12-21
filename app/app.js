import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import styles from './styles';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pet_id: "1113",
      pet: '',
    }
    this.getPet = this.getPet.bind(this);
  }

  getPet () {
    Axios.get('http://localhost:4000/buy', {
      body: {
        pet_id:this.state.pet_id // !!! fix !!! server says req.body.pet_id = undefineds
      }
    })
    .then(res => {
      console.log('Pet object from server ->', res.data)
    })
  }

  componentDidMount () {
    this.getPet()
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));