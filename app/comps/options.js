import React, { PureComponent } from 'react';
import Radium from 'radium';
import styles from '../styles';

class Options extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={[styles.optionsDiv.base]}>
        <button style={[styles.options.base]}>
          options
        </button>
      </div>
    )
  }
}

Options = Radium(Options);
export default Options;