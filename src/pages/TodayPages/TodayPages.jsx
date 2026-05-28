import HabitsWidget from '../../modules/HabitsWidget/HabitsWidget'
import ColorPicker from '..//..//components/ColorPicker/ColorPicker'
import { formatDate, getToday } from './../../utils/timeUtils'
import styles from './TodayPages.module.css'
const TodayPages = () => {
	const today = formatDate(getToday())
	{
		console.log(formatDate(getToday()))
	}
	return (
		<div className={styles.div_main}>
			<div className={styles.div_top_panel}>
				<p>Сегодня, {today}</p>
			</div>
			<div className={styles.div_line}></div>
			<div className={styles.div_widget}>
				<HabitsWidget />
				<ColorPicker />
			</div>
		</div>
	)
}
export default TodayPages
