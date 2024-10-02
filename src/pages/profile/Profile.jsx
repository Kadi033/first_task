import "./Profile.css";

function Profile() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    photoUrl: 'https://via.placeholder.com/150',
  };

  return (
    <div className="profileContainer">
      <h2 className="profileTitle">Profile</h2>
      <form className="profileForm">
        <div className="profilePhoto">
          <img src={user.photoUrl} alt="Profile" />
        </div>
        <div className="profileField">
          <label>First Name:</label>
          <input type="text" value={user.firstName} readOnly />
        </div>
        <div className="profileField">
          <label>Last Name:</label>
          <input type="text" value={user.lastName} readOnly />
        </div>
        <div className="profileField">
          <label>Email:</label>
          <input type="email" value={user.email} readOnly />
        </div>
      </form>
    </div>
  );
}

export default Profile;
