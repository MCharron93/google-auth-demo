import React from 'react'
import './App.css';

class App extends React.Component() {

  componentDidMount(){
    console.log("Hello, I mounted correctly")

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: ''
      })
    })
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <h2>Google Auth Demo</h2>
        <button>Sign in with Google</button>
      </header>
    </div>
  );
}
}

export default App;
