import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password : '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        });
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with Email and password</span>
                <form onSubmit={() => this.handleSubmit}>
                    <FormInput name="email" type="email" 
                            value={this.state.email}
                            label="Email"
                            handleChange={() => this.handleChange} 
                    required />
                    <FormInput name="password" type="password" 
                            value={this.state.password} 
                            label="Password"
                            handleChange={() => this.handleChange}
                    required />

                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;