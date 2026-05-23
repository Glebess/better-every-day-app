import { CircleCheckBig } from 'lucide-react'
import { useState } from 'react'
import Button from '../../UI/Button'
import SettingsHabitsWidget from '..//HabitsWidget/SettingsHabitsWidget/SettingsHabitsWidget'
import styles from './HabitsWidget.module.css'
const HabitsWidget = () => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(true)
	return (
		<div className={styles.div_habit_container}>
			<div className={styles.div_habits_top_panel}>
				<div className={styles.div_habits_top_panel_title}>
					<CircleCheckBig size={'25px'} />
					<p>Привычки</p>
				</div>
				<div className={styles.div_habits_top_panel_action}>
					<div
						className={styles.div_more}
						onClick={() => setIsSettingsOpen(!isSettingsOpen)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-6'
						>
							<path
								fillRule='evenodd'
								d='M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z'
								clipRule='evenodd'
							/>
						</svg>
						{isSettingsOpen ? <SettingsHabitsWidget /> : null}
					</div>
					<Button className={styles.button_add_habits}>Добавить</Button>
				</div>
			</div>
			<div className={styles.all_habit_container}>
				<div className={styles.item_habit}>
					<div className={styles.habit_icon}>❄️</div>
					<p className={styles.habit_title}>Пить воду</p>
				</div>

				<div className={styles.item_habit}>
					<div className={styles.habit_icon}>⚡</div>
					<p className={styles.habit_title}>Ам ам ам</p>
				</div>

				<div className={styles.item_habit}>
					<div className={styles.habit_icon}>🚍</div>
					<p className={styles.habit_title}>Много кушат221212ь21212212121212</p>
				</div>
			</div>
		</div>
	)
}
export default HabitsWidget
