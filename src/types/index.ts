//типы

// Привычка
export interface Habit {
	id: number
	name: string
	description: string
	frequency: 'daily' | 'weekly' | 'monthly'
	streak: number
	color: string
	createdAt: string
}

export type ViewMode = 'habits'
