import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { reduxStore } from './reduxStore/reduxStore.js'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './reactRouter/rootRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={rootRouter} />
    </Provider>
  </StrictMode>,
)
