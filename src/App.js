import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  //처음 render될 때 호출
  componentDidMount() {
    setTimeout( () => {
      this.setState({ isLoading : false })
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    return(
      <div>
        <h1>{isLoading ? 'Loding...' : 'We are ready'}</h1>
      </div>
    )
  }
}

export default App;
