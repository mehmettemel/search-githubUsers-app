import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='temelion2.us.auth0.com'
    clientId='O20D6UqfkZE2keyOaBuLDyiCEAd8Cmn8'
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <GithubProvider>
        <App />
      </GithubProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
)
