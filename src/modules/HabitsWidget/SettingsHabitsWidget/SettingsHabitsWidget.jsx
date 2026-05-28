import { Info, List, Settings, Trash } from 'lucide-react'
import Button from '../../../UI/Button'
import styles from './SettingsHabitsWidget.module.css'

const SettingsHabitsWidget = () => {
	const buttons = [
		{ icon: Settings, text: 'Настройки', delay: '0s' },
		{ icon: Info, text: 'Детали', delay: '0.1s' },
		{ icon: List, text: 'Показать списком', delay: '0.2s' },
		{ icon: Trash, text: 'Убрать', delay: '0.3s' },
	]

	return (
		<div className={styles.settings_container}>
			{buttons.map((button, index) => (
				<Button
					key={index}
					className={styles.button_settings}
					style={{ '--delay': button.delay }}
				>
					<p>{button.text}</p>
					<button.icon />
				</Button>
			))}
		</div>
	)
}

export default SettingsHabitsWidget
