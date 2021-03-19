import React from 'react';
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../asset/crown.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" >SHOP</OptionLink>
            <OptionLink to="/shop" >CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to="/signin" >SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ?
                null:
                <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);