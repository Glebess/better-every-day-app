import { Info, List, Settings, Trash } from 'lucide-react'
import Button from '../../../UI/Button'
import styles from './SettingsHabitsWidget.module.css'
const SettingsHabitsWidget = () => {
	return (
		<div className={styles.settings_container}>
			<Button className={styles.button_settings}>
				<p>Настройки</p>
				<Settings />
			</Button>

			<Button className={styles.button_settings}>
				<p>Детали</p>
				<Info />
			</Button>

			<Button className={styles.button_settings}>
				<p>Показать списком</p>
				<List />
			</Button>
			{/* <Columns3 /> */}

			<Button className={styles.button_settings}>
				<p>Убрать</p>
				<Trash />
			</Button>
		</div>
	)
}
export default SettingsHabitsWidget
