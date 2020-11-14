import React from "react";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from './headerStyles';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import imgLogo from '../../images/logo192.png'
import {selectCurrentUser} from "../../redux/user/userSelectors";
import CartIconContainer from "../cart-icon/CartIconContainer";
import CartDropdownContainer from "../cart-dropdown/CartDropdownContainer";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>

        <LogoContainer to='/'>
            <img src={imgLogo} alt='Logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionsLink to='/'>
                Home
            </OptionsLink>

            <OptionsLink to='/shop'>
                Shop
            </OptionsLink>

            <OptionsLink to='/contact'>
                Contact
            </OptionsLink>
            {!currentUser ?
                <OptionsLink to='/signin'>
                    Sign In
                </OptionsLink>
                :
                <OptionsLink as='div' onClick={() => auth.signOut()}>
                    Sign Out
                </OptionsLink>
            }
            <CartIconContainer/>
        </OptionsContainer>
        {hidden ? null : <CartDropdownContainer/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header)
