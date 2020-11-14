import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Homepage} from "../../pages/home/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import HeaderContainer from "../header/HeaderContainer";
import CheckoutPageContainer from "../../pages/checkout/CheckoutPageContainer";

class App extends Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth)
                    userRef.onSnapshot(snapshot => setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }))
                } else {
                    setCurrentUser(userAuth)
                }
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        console.log('this.props.currentUser: ', this.props.currentUser)
        return (
            <div>
                <BrowserRouter>
                    <HeaderContainer/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route exact path="/signin"
                               render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInUp/>}/>
                        <Route exact path="/checkout" component={CheckoutPageContainer}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
