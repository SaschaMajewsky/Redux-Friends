import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";

class Protected extends React.Component {

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return(
            <>
            {this.props.fetchingFriends && <p>Calling all your friends house number right now. Dialing..</p>}
            {this.props.error && <p>{this.props.error}</p>}
            {this.props.friends.map(friend => (
                <div>
                    <h2>{friend.name}</h2>
                    <h2>{friend.age}</h2>
                    <h2>{friend.email}</h2>
                </div>
            ))}
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