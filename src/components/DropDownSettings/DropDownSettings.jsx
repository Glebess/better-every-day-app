import Button from '../../UI/Button'
import styles from './DropDownSettings.module.css'
const DropDownSettings = (props) => {
	const { classContainer, buttons } = props
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
export default DropDownSettings
