import Layout from '../components/Layout'
import UserContext from '../contexts/UserContext'
import { useContext, useEffect } from 'react'
import {useRouter} from 'next/router'
import Channel from '../components/Channel'

export default function Account() {
    const {user, auth} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        if(!auth) {
            router.push('/')
        }
    })

    return (
        <Layout title="Your Account">
            <Channel user={user}/>
        </Layout>
    )
}