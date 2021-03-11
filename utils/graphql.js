import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { useEffect, useState } from 'react'
import { setContext } from '@apollo/client/link/context';

function Client(authState) {
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


    const httpLink = new HttpLink({
        uri:  process.env.NEXT_PUBLIC_URL_GRAPHQL,
      });
      
      const wsLink = IsWindow ? new WebSocketLink({
        uri: process.env.NEXT_PUBLIC_WSS_GRAPHQL,

        options: {
          reconnect: true,
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


      const authLink = setContext((_, { headers }) => {
        if(token) {
          return {
            headers: {
              ...headers,
              authorization: `Bearer ${token}`
            }
          }
        } else {
          return {
            headers: {
              ...headers
            }
          } 
        }
        
      });

      const client = new ApolloClient({
          // ssrMode: true,
          link: authLink.concat(link),
          // headers,
          cache: new InMemoryCache({})
      })

      return client
}





export default Client