import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import FinancePage from './pages/FinancePage/FinancePage'
import HabitsPage from './pages/HabitsPage/HabitsPage'
import HealthPage from './pages/HealthPage/HealthPage'
import TargetsPage from './pages/TargetsPage/TargetsPage'
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
							element={
								<Navigate
									to='/today'
									replace
								/>
							}
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
							path='/targets'
							element={<TargetsPage />}
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
