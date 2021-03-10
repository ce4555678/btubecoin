import Navbar from './Navbar'
import Head from 'next/head'
import { Container} from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function Layout ({children, title}) {
    const [IsWindow, setIsWindow] = useState(false)

    // useEffect(() => {
    //     if(typeof window !== 'undefined') {
    //         setIsWindow(true)
    //     }
    // })
    return (
        <>
         <Head>
         <meta charSet="UTF-8"/>
         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
         <meta name="msapplication-TileColor" content="#ffe457"/>
         <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"/>
         <meta name="theme-color" content="#ffe457"/>
         <title>{title}</title>
         </Head>
         <Navbar/>
         <Container style={{marginTop: '11vh'}} fluid>
             {children}
         </Container>
        </>
    )
}