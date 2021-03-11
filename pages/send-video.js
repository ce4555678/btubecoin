import Link from 'next/link'
import Layout from '../components/Layout'
import UserContext from '../contexts/UserContext'
import { useContext, useEffect } from 'react'
import {useRouter} from 'next/router'

export default function SendVideo() {
    const {user, auth} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        if(!auth) {
            router.push('/')
        }
    })
    
    return (
        <Layout title="Send Video">
            <Link href="/">
                <h1 className="text-white">incio</h1>
            </Link>
        </Layout>
    )
}