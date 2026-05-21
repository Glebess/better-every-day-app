// Получение сегодняшней даты "год-месяц-день"
export const getToday = (): string => {
	return new Date().toISOString().split('T')[0]
}
// форматирование даты 2026-05-17 => 17 мая 2026
export const formatDate = (date: string): string => {
	return new Date(date).toLocaleDateString('ru-RU', {
		day: 'numeric', // число
		month: 'long', // месяц
		year: 'numeric', // год полностью
	})
}
