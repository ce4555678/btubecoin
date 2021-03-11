import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { useEffect, useState } from 'react'

function Client(authState) {
    console.log(authState)
    const [ IsWindow, setIsWindow ] = useState(false)

    useEffect(() => {
        if(typeof window !== 'undefined') {
            setIsWindow(true)
        }
    })
    let token 
    if(authState.status == "in") {
        token = authState.token
        if(!token == authState.token) {
           token = authState.token
        }
    }
    const headers = token ? { authorization: `Bearer ${token}`} : {}
    const connectionParams = token ? { authorization: `Bearer ${token}`} : {}
    const httpLink = new HttpLink({
        uri:  process.env.NEXT_PUBLIC_URL_GRAPHQL,
        headers
      });
      
      const wsLink = IsWindow ? new WebSocketLink({
        uri: process.env.NEXT_PUBLIC_WSS_GRAPHQL,
        options: {
          reconnect: true,
          connectionParams
        }
      }) : null
      
      // The split function takes three parameters:
      //
      // * A function that's called for each operation to execute
      // * The Link to use for an operation if the function returns a "truthy" value
      // * The Link to use for an operation if the function returns a "falsy" value
      const link = IsWindow ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink,
      ) : httpLink

      const client = new ApolloClient({
          ssrMode: true,
          link,
          cache: new InMemoryCache({})
      })

      return client
}





export default Client