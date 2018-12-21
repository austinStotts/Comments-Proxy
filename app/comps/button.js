import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from '../styles';

class Button extends PureComponent {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div style={[
        styles.uiButtonDiv.base,
        styles.uiButtonDiv.primary
      ]}>
        <button 
        className="ui-button"
        style={[
          styles.uiButton.base,
          styles.uiButton.primary
        ]}
        onClick={this.props.function}
        >{this.props.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  //the text of the button
  text: PropTypes.string.isRequired,
  // what the button does when clicked
  function: PropTypes.func.isRequired
}

Button = Radium(Button);
export default Button;