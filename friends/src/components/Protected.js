import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";
import FriendForm from "./FriendForm";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';

class Protected extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return(
            <>
            {this.props.fetchingFriends && <p>Calling all your friends house number right now. Dialing..</p>}
            {this.props.error && <p>{this.props.error}</p>}
            <FriendForm />
            <div className="friend-container">
            {this.props.friends.map(friend => (
                <div className="friend-card">
                <MDBRow>
                    <MDBCol style={{ maxWidth: "22rem", backgroundColor: "white" }}>
                        <MDBCard wide>
                        <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
                            <div className="description">
                            <h2 className="h2-responsive mb-2 text" style={{ textAlign: "center" }}>{friend.name}</h2>
                            </div>
                        </MDBCardImage>
                        <MDBCardBody cascade style={{ height: "5rem" }}>
                            <MDBCardTitle style={{ textAlign: "center" }}><strong>{friend.age}</strong> years old<br/>{friend.email}</MDBCardTitle>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </div>
            ))}
            </div>
            </>
        )
    }

}

  const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchFriends })(Protected)