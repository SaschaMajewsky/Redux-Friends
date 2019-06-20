import React from "react";
import { addFriend } from "../actions";
import { connect } from "react-redux";


class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: " ",
        email: ""
      }
    };
}

handleInput = event => {
  this.setState({ friend: { ...this.state.friend, [event.target.name]: event.target.value }})
}

addFriend = event => {
  event.preventDefault();
  this.props.addFriend({...this.state.friend, age: Number(this.state.friend.age)})
  console.log("presubmit:", this.state.friend)
/*   .then(() => {
      this.props.history.push("/");
  }); */
};

  render() {
    return (
      <>
        <br/>
        <form onSubmit={this.addFriend}>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.friend.name} onChange={this.handleInput} />
        <br/>
        <label>Age:</label>
        <input type="text" name="age" value={this.state.friend.age} onChange={this.handleInput} />
        <br/>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.friend.email} onChange={this.handleInput} />
        <br/>
        <button type="submit">Add Friend</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {  }
}

export default connect(mapStateToProps, { addFriend })(FriendForm);