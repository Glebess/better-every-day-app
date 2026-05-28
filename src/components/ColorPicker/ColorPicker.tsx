import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import styles from './ColorPicker.module.css'
const ColorPicker: React.FC = () => {
	const [color, setColor] = useState('#ffffff')

	const presetColors = [
		'#ff0000',
		'#dc143c',
		'#ff6347',
		'#ff69b4',
		'#ffc0cb',
		'#ffa500',
		'#ff8c00',
		'#ff7f50',
		'#ffd700',
		'#ffff00',
		'#ffe4b5',
		'#f0e68c',
		'#00ff00',
		'#32cd32',
		'#00fa9a',
		'#008000',
		'#228b22',
		'#adff2f',
		'#00ffff',
		'#00bfff',
		'#1e90ff',
		'#0000ff',
		'#00008b',
		'#800080',
		'#8a2be2',
		'#ee82ee',
		'#ff00ff',
		'#dda0dd',
		'#a52a2a',
		'#8b4513',
		'#deb887',
		'#d2691e',
		'#000000',
		'#333333',
		'#666666',
		'#999999',
		'#cccccc',
		'#ffffff',
	]
	return (
		<>
			<div className={styles.div_container}>
				{presetColors.map((presetColor, index) => (
					<div className={styles.div_color_select}>
						<div
							className={styles.div_color_item}
							style={{ backgroundColor: presetColor }}
							key={index}
							onClick={() => setColor(presetColor)}
						/>
					</div>
				))}
			</div>
			<ChromePicker
				color={color}
				onChange={(newColor) => setColor(newColor.hex)}
			/>
		</>
	)
}
export default ColorPicker
