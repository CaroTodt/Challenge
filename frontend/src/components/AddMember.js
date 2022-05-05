import React, { useState } from "react";
import { useForm } from "react-hook-form";



const AddMember = (props) => {




	const {
		register,
		handleSubmit,
		reset,
		// Read the formState before render to subscribe the form state through the Proxy
		formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
	} = useForm();


	const initialMemberState = {
		firstName: "",
		lastName: "",
		address: "",
		ssn: ""
	};
	const [member, setMember] = useState(initialMemberState);
	const [submitted, setSubmitted] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setMember({ ...member, [name]: value });
	};

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	if (member.firstName && member.lastName && member.address && member.ssn) {
	// 		handleInputChange(e, props.saveMember(member));
	// 	}else{
	// 		setDisabled(true)
	// 	}
	// }
	const onSubmit = (data) => {

		props.saveMember(data)


	}

	// const clearForm = () => {
	// 	setMember(initialMemberState);
	// 	setSubmitted(false);

	// };
	return (
		// <div className="submit-form">
		// 	{submitted && (
		// 		<div>
		// 			<h4>You submitted successfully!</h4>
		// 		</div>
		// 	)}
		// 	<div>
		// 		<div className="form-group">
		// 			<label htmlFor="title">First Name</label>
		// 			<input
		// 				type="text"
		// 				className="form-control"
		// 				id="firstName"
		// 				required
		// 				value={member.firstName}
		// 				onChange={handleInputChange}
		// 				name="firstName"
		// 				placeholder="First Name"
		// 			/>
		// 		</div>
		// 		<div className="form-group">
		// 			<label htmlFor="description">Last Name</label>
		// 			<input
		// 				type="text"
		// 				className="form-control"
		// 				id="lastName"
		// 				required
		// 				value={member.lastName}
		// 				onChange={handleInputChange}
		// 				name="lastName"
		// 				placeholder="Last Name"
		// 			/>
		// 		</div>
		// 		<div className="form-group">
		// 			<label htmlFor="description">Address</label>
		// 			<input
		// 				type="text"
		// 				className="form-control"
		// 				id="address"
		// 				required
		// 				value={member.address}
		// 				onChange={handleInputChange}
		// 				name="address"
		// 				placeholder="Address"
		// 			/>
		// 		</div>
		// 		<div className="form-group">
		// 			<label htmlFor="description">SSN</label>
		// 			<input
		// 				type="text"
		// 				className="form-control"
		// 				id="ssn"
		// 				required
		// 				value={member.ssn}
		// 				onChange={handleInputChange}
		// 				name="ssn"
		// 				placeholder="###-##-####"
		// 				pattern="^((\d{3}-?\d{2}-?\d{4})|(X{3}-?X{2}-?X{4}))$"
		// 			/>
		// 		</div>
		// 		<br />
		// 		<div className="row">
		// 			<div className="col">
		// 				<button onClick={clearForm} className="btn btn-danger">
		// 					Reset
		// 				</button>
		// 			</div>
		// 			<div className="col">
		// 				<button  disabled={disabled} onClick={handleSubmit} className="btn btn-primary">
		// 					Save
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>

		// </div>
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>

				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						name="firstName"
						placeholder='First Name'
						{...register("firstName", { required: true, maxLength: 30 })}
					/>
					{errors.firstName && <p className="error">Please check the First Name</p>}

				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						name="lastName"
						placeholder='Last Name'
						{...register("lastName", { required: true, maxLength: 30 })}
					/>
					{errors.lastName && <p className="error">Please check the Last Name</p>}

				</div>

				<div className="form-group">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						className="form-control"
						id="address"
						name="address"
						placeholder='Address'
						{...register("address", { required: true, maxLength: 30 })}
					/>
					{errors.address && <p className="error">Please check the Address</p>}

				</div>
				<div className="form-group">
					<label htmlFor="ssn">SSN</label>
					<input
						type="text"
						className="form-control"
						id="ssn"
						name="ssn"
						placeholder='###-##-####'
						{...register("ssn",
							{
								required: true,
								pattern: /^((\d{3}-?\d{2}-?\d{4})|(X{3}-?X{2}-?X{4}))$/
							})}
					/>
					{errors.ssn && <p className="error">Please check the ssn</p>}

				</div>
				<br />
				<div className="row">
					<div className="col">

						<input type="button" className="btn btn-danger" value="Reset" onClick={() => {
							reset({
								firstName: "",
								lastName: "",
								address: "",
								ssn: ""

							}, {
								keepErrors: false,
								keepDirty: true,
								keepIsSubmitted: false,
								keepTouched: false,
								keepIsValid: false,
								keepSubmitCount: false,
							});
						}} />
					</div>
					<div className="col">
						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default AddMember;