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
					<div className={styles.div_completed_task}>
						<span>1</span>
					</div>
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
					<Button></Button>
				</div>
			</div>
		</div>
	)
}
export default HabitsWidget
