import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'

import store from './store/store.js'
import App from './App.jsx'

AOS.init({
	duration: 1200
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
