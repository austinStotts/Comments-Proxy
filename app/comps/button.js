import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from '../styles';

class Button extends PureComponent {
  constructor (props) {
    super(props);
    this.height;
    this.width;
    props.width ? this.width = props.width : this.size = '75px';
    props.height ? this.height = props.height : this.size = '30px';
  }
  
  render () {
    return (
      <div style={[
        styles.uiButtonDiv.base,
        styles.uiButtonDiv.primary
      ]}>
        <button 
        className="ui-button"
        style={{fontSize:this.size}}
        style={[
          styles.uiButton.base,
          styles.uiButton.primary,
          {
            width:this.width,
            height:this.height
          }
        ]}
        onClick={this.props.func}
        >{this.props.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  //the text of the button
  text: PropTypes.string.isRequired,
  // what the button does when clicked
  func: PropTypes.func.isRequired
}

Button = Radium(Button);
export default Button;