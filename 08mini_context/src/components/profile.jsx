import React, { useContext } from "react";
import userContext from "../context";

function Profile() {
  const { user } = useContext(userContext);

  return (
    <div>
      <h2>Profile</h2>
      {user ? <p>Welcome, {user}!</p> : <p>Please log in to view profile.</p>}
    </div>
  );
}

export default Profile;
