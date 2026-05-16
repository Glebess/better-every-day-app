import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import FinancePage from './pages/FinancePage/FinancePage'
import HabitsPage from './pages/HabitsPage/HabitsPage'
import HealthPage from './pages/HealthPage/HealthPage'
import TargetPage from './pages/TargetsPage/TargetsPage'
import TodayPages from './pages/TodayPages/TodayPages'
const App = () => {
	return (
		<BrowserRouter>
			<div style={{ display: 'flex' }}>
				<Header />
				<main>
					<Routes>
						<Route
							path='/'
							element={<TodayPages />}
						/>
						<Route
							path='/today'
							element={<TodayPages />}
						></Route>

						<Route
							path='/calendar'
							element={<CalendarPage />}
						></Route>

						<Route
							path='/targetPage'
							element={<TargetPage />}
						></Route>

						<Route
							path='/habits'
							element={<HabitsPage />}
						></Route>

						<Route
							path='/finance'
							element={<FinancePage />}
						></Route>

						<Route
							path='/health'
							element={<HealthPage />}
						></Route>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App
