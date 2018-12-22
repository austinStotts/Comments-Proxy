import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropsTypes from 'prop-types';
import styles from '../styles';

class Link extends PureComponent {
  constructor (props) {
    super(props);
    this.size;
    props.size ? this.size = props.size : this.size = '14px';
  }
  // i want 'this' style to be unique but its changing the global styles

  render () {
    return (
      <div style={[
        styles.uiLinkDiv.base,
        styles.uiLinkDiv.primary
      ]}>
      <em>
        <a
        className='ui-link'
        style={[
          styles.uiLink.base,
          styles.uiLink.primary,
          {fontSize:this.size}
        ]}
        onClick={this.props.func}
        >{this.props.text}
        </a>
        </em>
      </div>
    )
  }
}

Link.propTypes = {
  // what the anchor says
  text: PropsTypes.string.isRequired,
  // what the anchor does
  func: PropsTypes.func.isRequired,
  // what size the link is
  size: PropsTypes.string
}

Link = Radium(Link);
export default Link;