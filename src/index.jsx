import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from "./globalStyles";
import {Provider} from 'react-redux';
import {store, reduxPersist} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
// import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
// import {ApolloProvider} from "react-apollo";
import {ApolloProvider} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-boost';
import {resolvers, typeDefs} from "./graphql/resolvers";
import {default as data} from './graphql/initialData';
import AppContainer from "./components/app/AppContainer";

const httpLink = createHttpLink({
    uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache,
    typeDefs,
    resolvers
});

client.writeData({data});

// Test query
// client.query({
//     query: gql`  {
//         getCollectionsByTitle(title: "hats"){
//             id
//             title
//             items{
//                 id
//                 name
//                 price
//                 imageUrl
//             }
//         }
//     }`
// }).then(r => console.log('====> GraphQl Server Data: ',r))

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <GlobalStyle/>
                    <PersistGate persistor={reduxPersist}>
                        <AppContainer/>
                    </PersistGate>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    </ApolloProvider>
    , document.getElementById('root')
);

serviceWorker.unregister();
