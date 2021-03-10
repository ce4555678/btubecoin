import firebase from '../utils/firebase'
import 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'


export default function Logout() {
    const router = useRouter()
    useEffect(() => {
        firebase.auth().signOut()
        .then(() => router.push('/'))
        .catch(() => router.push('/'))
    })
    return (
        <Layout title="Logout">
            <h1 className="text-white text-center">Logout</h1>
        </Layout>
    )
}