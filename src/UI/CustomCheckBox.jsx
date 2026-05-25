const CustomCheckBox = (props) => {
	const { className, checkMark, label, labelClassName, checked, onChange } =
		props
	return (
		<label className={className}>
			<input
				type='checkbox'
				checked={checked}
				onChange={onChange}
				hidden
			/>
			<span className={checkMark}></span>
			{label && <span className={labelClassName}>{label}</span>}
		</label>
	)
}
export default CustomCheckBox
