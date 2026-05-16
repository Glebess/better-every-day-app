import styles from './Header.module.css'
import HeaderButtonList from './HeaderButtonList'
const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderButtonList />
		</header>
	)
}
export default Header
