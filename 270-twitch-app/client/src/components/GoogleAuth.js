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
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed In</div>
    } else {
      return <div>Not Signed In</div>
    }
  }

  render() {
    return (
      <div>{ this.renderAuthButton() }</div>
    );
  }
}

export default GoogleAuth;