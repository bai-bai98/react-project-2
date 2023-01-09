import { useEffect, useState } from "react";

const Profile = (props) => {
  const { onUserNameChange } = props;
  const [userName, setUserName] = useState(props.userName);
  useEffect(() => {
    setUserName(props.userName);
  }, [props.userName]);
  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    onUserNameChange(userName);
  };
  return (
    <form onSubmit={onSubmit} className="profileForm">
      <h1 className="profile">Profile</h1>
      <div>
        <label className="userName">UserName</label>
        <input
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          type="text"
          className="userNameTextArea"
        />
      </div>
      <div>
        <button className="btnUserName">Save</button>
      </div>
    </form>
  );
};

export default Profile;
