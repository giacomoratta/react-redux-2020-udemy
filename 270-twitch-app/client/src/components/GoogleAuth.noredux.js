import React from 'react';

class GoogleAuth extends React.Component {

  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '301479016041-38c7b6ebnagtdhvqm8eimqq3mlu7l9bb.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        // 1) set current state (= this.onAuthChange)
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        });

        // 2) listen for state changes
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (/* isSignedIn */) => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"/>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>{ this.renderAuthButton() }</div>
    );
  }
}

export default GoogleAuth;