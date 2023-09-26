import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './features/catalogSlice.js'

export default configureStore({
	reducer: {
		catalog: catalogReducer
	}
})
