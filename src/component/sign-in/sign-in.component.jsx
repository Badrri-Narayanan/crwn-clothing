import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux'

import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password : '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        const {emailSignInStart} = this.props;
        
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const {email, password} = this.state;
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" 
                            value={email}
                            onChange={this.handleChange}
                            label="Email"
                    required />
                    <FormInput name="password" type="password" 
                            value={password} 
                            label="Password"
                            onChange={this.handleChange}
                    required />

                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);