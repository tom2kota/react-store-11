import React from "react";
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import {Spinner} from "../../components/spinner/Spinner";
import CollectionPage from "./CollectionPage";

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`

const CollectionPageContainer = ({ match }) => (
    <Query
        query={GET_COLLECTION_BY_TITLE}
        variables={{ title: match.params.collectionId }}
    >
      {({ loading, data: { getCollectionsByTitle } }) => {
        if (loading) return <Spinner />;
        return <CollectionPage collection={getCollectionsByTitle} />;
      }}
    </Query>
)

export default CollectionPageContainer
