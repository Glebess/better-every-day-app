import { Copy, Flag, Info, List, Palette, Settings, Trash } from 'lucide-react'
export const habitsWidgetSettingsButtons = [
	{ icon: Settings, text: 'Настройки', action: 'settings', delay: '0s' },
	{ icon: Info, text: 'Детали', action: 'details', delay: '0.1s' },
	{ icon: List, text: 'Показать списком', action: 'list', delay: '0.2s' },
	{ icon: Trash, text: 'Убрать', action: 'remove', delay: '0.3s' },
]
export const habitSettingsButton = [
	{ icon: Palette, text: 'Цвет', action: 'color', delay: '0s' },
	{ icon: Copy, text: 'Дублировать', action: 'copy', delay: '0.1s' },
	{ icon: Flag, text: 'Приоритет', action: 'priority', delay: '0.2s' },
	{ icon: Trash, text: 'Удалить', action: 'delete', delay: '0.3s' },
]
