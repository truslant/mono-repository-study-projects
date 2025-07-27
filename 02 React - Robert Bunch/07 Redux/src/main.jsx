import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer.js'


const reduxStore = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>,
)
