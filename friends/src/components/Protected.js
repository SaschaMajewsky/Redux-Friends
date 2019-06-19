import React from "react";
import { connect } from "react-redux";

const Protected = (props) => (
    <>
    {props.fetchingFriends && <p>Calling all your friends house number right now. Dialing..</p>}
    {props.error && <p>{props.error}</p>}
    {props.friends.map(friend => (
        <div>
            <h2>{friend.name}></h2>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
        </div>
    ))}
    </>
)


  const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Protected)