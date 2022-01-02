import React from 'react'
import Cookies from 'js-cookie'
import { SpotifyApiContext } from 'react-spotify-api'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import SpotifyPlayer from 'react-spotify-web-playback';

import 'react-spotify-auth/dist/index.css'

import './App.css';

const App = () => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))

  function logout() {
    Cookies.remove("spotifyAuthToken");
    window.location.href = '/';
    React.setState({});
    return false;
  }

  return (
    <div className='App'>
      <header className="App-header">
        <h1>My First Spotify Integration</h1>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here */}
            <SpotifyPlayer
              token={token}
              syncExternalDevice={true}
            />
            <button onClick={logout}>Logout</button>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='https://xyz.d2e8xok8adany0.amplifyapp.com/callback'
          clientID='8195ebf623464534bf329bb51039c658'
              scopes={[
                Scopes.userReadPrivate,
                Scopes.userReadEmail,
                Scopes.streaming,
                Scopes.userReadPlaybackState,
                Scopes.userModifyPlaybackState,
                Scopes.userLibraryRead,
                Scopes.userLibraryModify
              ]}
          onAccessToken={(token) => setToken(token)}
        />
        )}
        </header>
    </div>
  )
}
export default App