import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Redirect } from "react-router-dom";
import 'mdbreact/dist/css/mdb.css' 

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: props.error,
            accountData: {
                username: "",
                password: ""
            }
        }
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.accountData)
        .then(() => {
            this.props.history.push("/");
        });
    };

    handleInput = event => {
        this.setState({ accountData: { ...this.state.accountData, [event.target.name]: event.target.value }})
    }

    render() {
        if (localStorage.getItem("api_token")) {
            return <Redirect to="/"/>
        }
        return(
            <div>
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.accountData.username} onChange={this.handleInput}/>
                    <br/>
                    <label>Password:</label>
                    <input type="text" name="password" value={this.state.accountData.password} onChange={this.handleInput}/>
                    <br/>
                    <button className="btn peach-gradient" type="submit">Enter</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { error: state.error }
}

export default connect(mapStateToProps, { login })(Login);