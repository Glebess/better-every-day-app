import { useState } from 'react'
import styles from './Header.module.css'
import HeaderButtonList from './HeaderButtonList'
const Header = () => {
	const date = new Date()
	const days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	]

	const [timeNow, setTimeNow] = useState({
		dayName: days[date.getDay()],
		day: date.getDate(),
	})
	return (
		<header className={styles.header}>
			<HeaderButtonList timeNow={timeNow} />
		</header>
	)
}
export default Header
