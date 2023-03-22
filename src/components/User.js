import React from "react";

const User = (props) => {

	const removeHandler = () => {
		props.removeUserHandler(props.id);
	}

	return (
		<li onClick={removeHandler}>
			{props.username} ({props.age} years old)
	  	</li>
	)
}

export default User;
