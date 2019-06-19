import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountData: {
                username: "",
                password: ""
            }
        }
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.accountData)
    }

    handleInput = event => {
        this.setState({ accountData: { ...this.state.accountData, [event.target.name]: event.target.value }})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.accountData.username} onChange={this.handleInput}/>
                    <br/>
                    <label>Password:</label>
                    <input type="text" name="password" value={this.state.accountData.password} onChange={this.handleInput}/>
                    <br/>
                    <button type="submit">Enter</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { login })(Login);