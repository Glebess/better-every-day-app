import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'

import HabitsPage from './pages/HabitsPage/HabitsPage'
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route
							path='/'
							element={<HabitsPage />}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	)
}

export default App
