import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import styles from '../styles';

// a generic / standard Button used to standardize buttons

// takes a text |string| #
// takes a func |function| #
// takes a special |object|
// takes a specialDiv |object|

// special props are objects containing inline css 
// used to do special styling on generic comps

// a generic / standard Link used to standardize Links
let Link = (props) => {
  return (
    <div style={[
      styles.uiLinkDiv.base,
      props.specialDiv
    ]}>
      <em>
        <a
        className='ui-link'
        href={props.link ? props.link : null}
        target={'_blank'}
        style={[
          styles.uiLink.base,
          props.special
        ]}
        >{props.text}
        </a>
      </em>
    </div>
  )
}

Link.propTypes = {
  // what the anchor says
  text: PropTypes.string.isRequired,
  // what the anchor does
  func: PropTypes.func,
  // where it goes
  link: PropTypes.string,
  // special css 
  special: PropTypes.object,
  // special div css
  specialDiv: PropTypes.object
}

// radium allows for a style array
Link = Radium(Link);
export default Link;