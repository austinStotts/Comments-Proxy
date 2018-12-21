import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const Button = (props) => {
  console.log(props.text);
  return (
    <div>
      <button 
      className="ui-button"
      style={styles.uiButton}
      onClick={props.function}
      >{props.text}</button>
    </div>
  )
}

Button.propTypes = {
  //the text of the button
  text: PropTypes.string.isRequired,
  // what the button does when clicked
  function: PropTypes.func.isRequired
}

export default Button;