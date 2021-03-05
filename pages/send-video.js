import Link from 'next/link'
import Layout from '../components/Layout'

export default function SendVideo() {
    return (
        <Layout title="Send Video">
            <Link href="/">
                <h1 className="text-white">incio</h1>
            </Link>
        </Layout>
    )
}