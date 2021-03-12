import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

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

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const {email, password} = this.state;
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;