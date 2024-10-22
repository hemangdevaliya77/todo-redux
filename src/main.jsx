import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//for counter
import { Provider } from 'react-redux'
// import store from './redux/store.jsx'

//for todo app
import todoStore from './redux/todoStore.jsx'

createRoot(document.getElementById('root')).render(
 

    <Provider store={todoStore}>


    <App />
    </Provider>

)
