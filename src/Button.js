import './Button.css';

function Button({ onClick, children, className = '', color='blue' }) {
	const classNames = `Button ${color} ${className}`;
	return (
		<button className={classNames} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;