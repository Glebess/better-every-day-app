import {
	CalendarDays,
	CircleCheckBig,
	CircleUserRound,
	HeartPulse,
	Settings,
	Trophy,
	Wallet,
} from 'lucide-react'

import Button from '..//..//UI/Button'
import styles from './Header.module.css'

const HeaderButtonList = () => {
	return (
		<div className={styles.div_button_list_container}>
			{/* <div>
				<h1>20:37</h1>
				<h1>12.05.2026</h1>
			</div> */}
			<div className={styles.actions_panel}>
				<Button>
					<CalendarDays />
					<p>Календарь</p>
				</Button>

				<Button>
					<Trophy />
					<p>Цели</p>
				</Button>

				<Button>
					<CircleCheckBig />
					<p>Привычки</p>
				</Button>

				<Button>
					<Wallet />
					<p>Финансы</p>
				</Button>

				<Button>
					<HeartPulse />
					<p>Мои параметры</p>
				</Button>
			</div>

			<div className={styles.user_panel}>
				<Button>
					<Settings />
				</Button>
				<Button>
					<CircleUserRound />
				</Button>
			</div>
		</div>
	)
}
export default HeaderButtonList
