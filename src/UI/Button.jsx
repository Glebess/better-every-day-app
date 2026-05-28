const Button = (props) => {
	const { children, onClick, className, disabled = false, style } = props
	return (
		<button
			onClick={onClick}
			className={className}
			disabled={disabled}
			style={style}
		>
			{children}
		</button>
	)
}
export default Button
