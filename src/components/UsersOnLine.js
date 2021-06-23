import React from "react";
import "../style/_usersOnLine.scss";

class UsersOnLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnLine = this.state.users.filter((user) => user.online === true); // Change this line
    const renderOnline = usersOnLine.map((user) => <li key={user.username}>{user.username}</li>); // Change this line
    return (
      <div className='users'>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

export default UsersOnLine;
