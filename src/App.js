import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  //async : 비동기(좀 기다려야 한다는 걸 의미) await : 어떤걸 기다려야할지 표시하는것
  getMovies = async() => {
    //await axios가 끝날때까지 기다린다
    const movies = await axios.get('https://yts.lt/api/v2/list_movies.json?genre=Animation&sort_by=download_count'); 
  }

  //처음 render() 함수 호출 뒤 실행
  componentDidMount() {
    this.getMovies();
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
