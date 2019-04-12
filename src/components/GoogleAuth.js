import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1054552990644-m6bcd28q02orco4d6mqjcjd0mdj53ble.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not sure if we are signed in!</div>
    } else if (this.state.isSignedIn) {
      return <div>We're signed in!</div>
    } else {
      return <div>Not signed in...</div>
    };
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;