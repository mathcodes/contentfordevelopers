import App from './App'
import './sass/main.scss'
import store from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store ={store}>
        <App />
    </Provider>
);
