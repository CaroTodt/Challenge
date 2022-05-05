import React from "react";
import { useForm } from "react-hook-form";

const AddMember = (props) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { isDirty, isValid, errors },
	} = useForm({ mode: "onChange" })


	const onSubmit = (data) => {
		props.saveMember(data)
		reset()
	}

	return (
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
						{...register("firstName", { required: true, minLength: 2, maxLength: 30, pattern: /^([^\s]+)$/ })}
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
						{...register("lastName", { required: true, minLength: 2, maxLength: 30, pattern: /^([^\s]+)$/ })}
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
						{...register("address", { required: true, minLength: 2, maxLength: 30})}
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
								pattern: /^((\d{3}-\d{2}-\d{4})|(X{3}-X{2}-X{4}))$/

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
						<button type="submit" className="btn btn-primary" disabled={!isValid | !isDirty}>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default AddMember;