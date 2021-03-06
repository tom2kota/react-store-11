import React from "react";
import {Query} from "react-apollo";
import {gql} from "apollo-boost"
import Header from "./Header";

const GET_CLIENT_PROPERTIES = gql`
    {
        cartHidden @client
        currentUser @client
    }
`

const HeaderContainer = () => (
    <Query query={GET_CLIENT_PROPERTIES}>
        {
            ({data: {cartHidden, currentUser}}) => <Header hidden={cartHidden} currentUser={currentUser}/>
        }
    </Query>
)

export default HeaderContainer
