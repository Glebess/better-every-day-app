import { CircleCheckBig } from 'lucide-react'
import Button from '../../UI/Button'
import styles from './HabitsWidget.module.css'
const HabitsWidget = () => {
	return (
		<div className={styles.div_habit_container}>
			<div className={styles.div_habits_top_panel}>
				<div className={styles.div_habits_top_panel_title}>
					<CircleCheckBig size={'25px'} />
					<p>Привычки</p>
				</div>
				<div className={styles.div_habits_top_panel_action}>
					<Button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='size-5'
						>
							<path d='M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' />
						</svg>
					</Button>
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
