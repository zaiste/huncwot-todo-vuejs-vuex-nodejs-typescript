import Vue from 'vue'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const defaultClient = new ApolloClient({
  link: new HttpLink({
    uri: '/graphql',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({ defaultClient });
const provide = apolloProvider.provide();

export default provide;
