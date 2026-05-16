const Button = (props) => {
	const { children, onClick, className, disabled = false, key } = props
	return (
		<button
			onClick={onClick}
			className={className}
			disabled={disabled}
			key={key}
		>
			{children}
		</button>
	)
}
export default Button
