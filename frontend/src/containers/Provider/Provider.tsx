import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Layout from '../Layout/Layout';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
/*
client
  .query({
    query: gql`
      {
        pokemonByName(name: "Ivysaur") {
          attacks {
            special {
              name
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));
*/
export class Provider extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    );
  }
}

export default Provider;
