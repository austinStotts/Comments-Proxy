import React, { PureComponent } from 'react';
import Radium from 'radium';
import Link from './link';
import styles from '../styles';
import Option from './option';
import Button from './button';

class Options extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
          <i key={'backIcon'} className={'material-icons'} style={[styles.back.base]} onClick={this.props.showBuy}>undo</i>
          <Link text={this.props.pet.species} size={'26px'} link={`https://en.wikipedia.org/wiki/${this.props.pet.species}`}/>
          <Option o1={'male'} o2={'female'}/>
          <Option o1={'gift wrap'} o2={'none'} default={'two'}/>
          <Option o1={'toy box'} o2={'none'} default={'two'}/>
          <button 
            key={'finishBtn'}
            style={[styles.finish.base, styles.finish.primary]}
            onClick={()=>{console.log('finished purchase...\nmake this do something if you want to...')}}
            ><em>{'Finish'}</em>
            </button>
      </div>
    )
  }
}

Options = Radium(Options);
export default Options;