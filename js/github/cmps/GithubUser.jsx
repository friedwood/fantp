import React from 'react';

const GithubUser = ({user}) => (
		<div>
			Iam the userss
			<h5>{user&&user.name}</h5>
			<p>Email: {user&& user.email}</p>
		</div>
	);

export default GithubUser;
