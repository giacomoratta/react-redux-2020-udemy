import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // see Button for Consumer
  // this component uses this.context

  // how to link context to nested child ('contextType' name is mandatory!)
  static contextType = LanguageContext;

  render () {
    // console.log(this.context); // basic usage of context
    // add .language after changes in LanguageSelector, which is not a string anymore, but a complex object
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field
