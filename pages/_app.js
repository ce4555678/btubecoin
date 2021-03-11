import '../styles/bootstrap.min.css'
import '../styles/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import {useEffect, useState} from 'react'
import firebase from '../utils/firebase'
import 'firebase/auth'
import 'firebase/database'
import UserContext from '../contexts/UserContext' 
import { ApolloProvider } from '@apollo/client'
import Client from '../utils/graphql'


Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
let acessToken 
function MyApp({ Component, pageProps }) {

  const [authState, setAuthState] = useState({ status: "loading" });

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if(!data.exists) return
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  let user
  if(authState.status == "in") {
    if(!acessToken) {
      acessToken = authState.token
    }
    if(acessToken !== authState.token) {
      acessToken = authState.token
      }
      user = authState.user ? authState.user : ""
  }

  let auth = authState.status == "in" ? true : false
  const client = Client(authState)

  return (
     <UserContext.Provider value={{auth, user}}>
       <ApolloProvider client={client}>
        <Component {...pageProps} />
       </ApolloProvider>
      </UserContext.Provider>
  )
}

export default MyApp
