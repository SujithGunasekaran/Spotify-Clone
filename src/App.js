import React, { useEffect, useState } from 'react';
import Login from './Components/Login';
import Main from './Components/Main';
import { getTokenFromResponse } from './Spotify';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import './Css/login.css';
import './Css/sidebar.css';
import './Css/footer.css';
import './Css/body.css';
import './Css/header.css';
import './Css/home.css';
import SpotifyAPI from 'spotify-web-api-js';

let spotify = new SpotifyAPI();

function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    let token = getTokenFromResponse();
    if (token.access_token) {
      setToken(token.access_token);
      spotify.setAccessToken(token.access_token)
    }
  }, [])
  return (
    <div>
      <Provider store={store}>
        {
          token ? <Main /> : <Login />
        }
      </Provider>
    </div>
  );
}

export default App;
