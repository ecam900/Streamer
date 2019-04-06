import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1054552990644-m6bcd28q02orco4d6mqjcjd0mdj53ble.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;