import '../styles/bootstrap.min.css'
import '../styles/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import {useEffect} from 'react'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    fetch('/api/country')
    .catch((err) => console.log("erro ao pegar o país"))
  })
  return <Component {...pageProps} />
}

export default MyApp
