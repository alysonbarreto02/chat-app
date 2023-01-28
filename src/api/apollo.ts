import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:8080/v1/graphql',
        })
      )
    : null

const httpLink = new HttpLink({
  uri: `http://localhost:8080/v1/graphql`, 
})

const link =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query)
          return (
            def.kind === 'OperationDefinition' &&
            def.operation === 'subscription'
          )
        },
        wsLink,
        httpLink
      )
    : httpLink

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})