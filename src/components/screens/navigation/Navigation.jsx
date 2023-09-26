import { Route, Routes } from 'react-router-dom'
import {
	AboutPage,
	CatalogPage,
	Error404,
	HomePage,
	OrderPage
} from 'components/screens/pages.js'

const Navigation = ({ setLock }) => {
	return (
		<Routes>
			<Route path="/" element={<HomePage setLock={setLock} />} />
			<Route path="/catalog" element={<CatalogPage setLock={setLock} />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/order" element={<OrderPage />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	)
}

export default Navigation
