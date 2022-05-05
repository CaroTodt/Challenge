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
				console.log(e);
			});
	};

	const refreshList = () => {
		retrieveMembers();
	};

	const saveMember = (member) => {
		var data = {
			firstName: member.firstName,
			lastName: member.lastName,
			address: member.address,
			ssn: member.ssn,
		};
		membersServices.create(data)
			.then(response => {
				refreshList();
			})
			.catch(e => {
				alert('Error to add a new member');
			});
	};

	return (
		<div className="row">
			<div className="col">
				<AddMember saveMember={saveMember} />
			</div>
			<div className="col">
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
	)

}

export default MemberList;