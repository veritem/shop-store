import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import storeContainer from './store'
import { Provider } from 'react-redux'
import { Global, css } from '@emotion/core'

ReactDOM.render(
  <Provider store={storeContainer}>
    <React.StrictMode>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

          :root {
            --whitish: #f1f3de;
            --second-whitish: #eb8f8f;
            --red: #ec0101;
            --dark-red: #cd0a0a;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Alata', sans-serif;
          }
          body {
            background-color: var(--whitish);
          }
        `}
      />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
