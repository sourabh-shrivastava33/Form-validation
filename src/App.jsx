import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";

const App = () => {
	const [values, setValues] = useState({
		name: "",
		date: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	// function handleSubmit(e) {
	// 	e.preventDefault();
	// }
	function handleChange(e) {
		setValues({ ...values, [e.target.name]: e.target.value });
	}
	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			label: "Name",
			errorMessage: "Name should be 3-20 character long",
			pattern: "^[a-zA-Z0-9]{3,20}$",
			required: true,
		},
		{
			id: 2,
			name: "date",
			type: "date",
			label: "Date",
			required: true,
		},
		{
			id: 3,
			name: "email",
			type: "email",
			label: "Email",
			errorMessage: "Name should be 3-20 character long",
			pattern:
				"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
			required: true,
		},
		{
			id: 4,
			name: "password",
			type: "password",
			label: "Password",
			errorMessage:
				"Password should consist atleast 1 Uppercase letter, 1 Lower case letter and 1 numeric character atleast 8-32 characters",
			pattern:
				"^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,32}$",
			required: true,
		},
		{
			id: 5,
			name: "confirmPassword",
			type: "password",
			label: "Confirm Password",
			errorMessage: "It does'nt match with the password",
			pattern: values.password,
			required: true,
		},
	];
	return (
		<div className="app">
			<h1>Register</h1>
			<form action="">
				{inputs.map((input) => {
					return (
						<FormInput
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={handleChange}
						/>
					);
				})}
				<div className="submit-btn">
					<button>submit</button>
				</div>
			</form>
		</div>
	);
};

export default App;
