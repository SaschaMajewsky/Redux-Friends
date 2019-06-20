import React from "react";

class FriendForm extends React.Component {
  state = {
    friend: {
      name: "",
      age: " ",
      email: ""
    }
  };

  render() {
    return (
      <>
        <label>Name:</label>
        <input name="name" type="text" />
        <label>Age:</label>
        <input name="age" type="number" />
        <label>Email:</label>
        <input name="email" type="email" />
        <button >Add Friend</button>
      </>
    );
  }
}

export default FriendForm;