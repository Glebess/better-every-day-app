const Button = (props) => {
	const { children, onClick, className, disabled = false, key, style } = props
	return (
		<button
			onClick={onClick}
			className={className}
			disabled={disabled}
			key={key}
			style={style}
		>
			{children}
		</button>
	)
}
export default Button
