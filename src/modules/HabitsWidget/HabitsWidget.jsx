import { CircleCheckBig, Ellipsis } from 'lucide-react'
import { useState } from 'react'
import Button from '../../UI/Button'
import CustomCheckBox from '../../UI/CustomCheckBox'
import DropDownSettings from '../../components/DropDownSettings/DropDownSettings'
import {
	habitSettingsButton,
	habitsWidgetSettingsButtons,
} from '..//..//components/DropDownSettings/ButtonsConfig/buttonsConfig'
import checkboxStyles from './CheckBox.module.css'
import styles from './HabitsWidget.module.css'
const HabitsWidget = () => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [isHabitHover, setIsHabitHover] = useState(true)
	const [isHabitSettingsOpen, setIsHabitSettingsOpen] = useState(true)
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
						<Ellipsis />
						{isSettingsOpen && (
							<DropDownSettings buttons={habitsWidgetSettingsButtons} />
						)}
					</div>
					<Button className={styles.button_add_habits}>Добавить</Button>
				</div>
			</div>
			<div className={styles.all_habit_container}>
				<div
					className={styles.item_habit}
					onMouseEnter={() => setIsHabitHover(true)}
					onMouseLeave={() => setIsHabitHover(false)}
				>
					{isHabitHover && (
						<span
							className={styles.habit_settings}
							onClick={() => setIsHabitSettingsOpen(!isHabitSettingsOpen)}
						>
							<Ellipsis />
							{isHabitSettingsOpen && (
								<DropDownSettings buttons={habitSettingsButton} />
							)}
						</span>
					)}
					<div className={styles.habit_icon}>❄️</div>
					<p className={styles.habit_title}>Пить воду</p>
					{isHabitHover && (
						<CustomCheckBox
							className={checkboxStyles.checkbox_task}
							checkMark={checkboxStyles.checkmark}
						/>
					)}
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
