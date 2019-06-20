import React from "react";
import { addFriend } from "../actions";
import { connect } from "react-redux";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBInput } from 'mdbreact';


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
        <form className="md-form" onSubmit={this.addFriend}>
        <input className="white-text" placeholder="Name" type="text" name="name" id="nameInput" value={this.state.friend.name} onChange={this.handleInput} autoComplete="off"/>
        <br/>
        <input className="white-text" placeholder="25" type="text" name="age" value={this.state.friend.age} onChange={this.handleInput} autoComplete="off"/>
        <br/>
        <input className="white-text" placeholder="Email" type="text" name="email" value={this.state.friend.email} onChange={this.handleInput} className="form-control white-text" autoComplete="off" />
        <br/>
        <button className="btn peach-gradient" type="submit">Add Friend</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {  }
}

export default connect(mapStateToProps, { addFriend })(FriendForm);