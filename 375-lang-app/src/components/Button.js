import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // see Field for this.context
  // this component uses Consumer

  renderButton (color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Voorleggen' }
        </LanguageContext.Consumer>
      </button>
    );
  }

  render () {
    return (
      <ColorContext.Consumer>
        { colorValue => this.renderButton(colorValue) }
      </ColorContext.Consumer>
    )
  }
}

export default Button
