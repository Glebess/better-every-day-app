import { formatDate, getToday } from './../../utils/timeUtils'
import styles from './TodayPages.module.css'

const TodayPages = () => {
	const today = formatDate(getToday())
	return (
		<div className={styles.div_main}>
			<div className={styles.div_top_panel}>
				<p>Сегодня, {today}</p>
			</div>
			<div className={styles.div_line}></div>
		</div>
	)
}
export default TodayPages
