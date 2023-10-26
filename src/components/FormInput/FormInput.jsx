import { useState } from "react";
import "./FormInput.css";
const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	function handleOnBlur() {
		setFocused(true);
	}
	const { id, errorMessage, label, ...inputs } = props;
	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<input
				{...inputs}
				// eslint-disable-next-line react/no-unknown-property
				focused={focused.toString()}
				onBlur={handleOnBlur}
			></input>
			<span>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
