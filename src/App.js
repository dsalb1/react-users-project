import React, {useState} from "react";

import UserForm from "./components/UserForm";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  
  const addUserHandler = (newUser) => {
		setUsers((prevUsers) => {
			return [newUser, ...prevUsers];
		});
  };

  const removeUserHandler = (userID) => {
    setUsers((prevUsers) => {
      return prevUsers.filter(u => u.id !== userID);
    })
  }

  let content = <p className="center">You have no users. Maybe add one?</p>

  if (users.length > 0) {
    content = <UserList removeUserHandler={removeUserHandler} users={users} />
  }

	return (
		<>
			<section id="user-form">
				<UserForm onSubmitHandler={addUserHandler} />
			</section>
      <section id="users">
        {content}
      </section>
    </>
	);
}

export default App;
