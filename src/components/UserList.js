import React from "react";
import User from "./User";

import styles from "./UserList.module.css";

const UserList = (props) => {
	return (
		<ul className={styles["user-list"]}>
			{props.users.map(u => (
				<User 
					key={u.id}
					id={u.id}
					removeUserHandler={props.removeUserHandler}
					username={u.username}
					age={u.age}
				/>	
			))}
	  </ul>
	)
}

export default UserList;
