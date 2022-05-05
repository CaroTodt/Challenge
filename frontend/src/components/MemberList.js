import React, { useState, useEffect } from "react";
import membersServices from "../services/MembersServices";
import AddMember from "./AddMember";

const MemberList = () => {

	const [members, setMembers] = useState([]);

	useEffect(() => {
		retrieveMembers();
	}, []);

	const retrieveMembers = () => {
		membersServices.getAll()
			.then(members => {
				setMembers(members);
			})
			.catch(e => {
				console.log('Error to load data from the server');
				retrieveMembers();
			});
	};

	const refreshList = () => {
		retrieveMembers();
	};

	const saveMember = (member) => {
	
		var data = {
			firstName: member.firstName.trim(),
			lastName: member.lastName.trim(),
			address: member.address.trim(),
			ssn: member.ssn,
		};
		console.log(data)
		membersServices.create(data)
			.then(response => {
				refreshList();
				alert ("Member was successfully added!!")
			})
			.catch(e => {
				alert('Error to add new member');
			});
	};

	return (
		<div className="row">
			<div className="col">
				<AddMember saveMember={saveMember} />
			</div>
			<div className="col">
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>First Name</th>
								<th> Last Name</th>
								<th>Address</th>
								<th>SSN</th>
							</tr>
						</thead>
						<tbody>
							{members.length > 0 ? (
								members.map(member => {
									return (
										<tr key={member.ssn}>
											<td>{member.firstName}</td>
											<td>{member.lastName}</td>
											<td>{member.address}</td>
											<td>
												{member.ssn}
											</td>
										</tr>
									)
								})) : (
								<tr>
									<td colSpan={4}>No members found</td>
								</tr>
							)
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)

}

export default MemberList;