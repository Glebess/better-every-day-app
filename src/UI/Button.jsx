export default Button = (props) => {
	const { text, onClick, className, disabled = false } = props
	return (
		<button
			onClick={onClick}
			className={className}
			disabled={disabled}
		>
			{text}
		</button>
	)
}
