import React from 'react';

// default value = 'english'
// capital 'C' mandatory
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render () {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;