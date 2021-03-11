import { useSubscription, gql } from '@apollo/client'
import {Alert, Spinner} from 'react-bootstrap'

export default function Channel (user) {
    const channelSubscription = gql`
    subscription($id: String) {
        btubecoin_channel(where: {id: {_eq: $id}}) {
          title
          avatar
          description
          country
        }
      }`
      let id = user.uid

        const {error, loading, data} = useSubscription(channelSubscription, { variables: id})
        // if(error) return <Alert variant="danger">Error</Alert>
        if(loading) return <Spinner animation="border" variant="primary" />
        console.log(data)
        return (
            <>
                {data.btubecoin_channel.map(channel => (
                    <div key={channel.id}>
                        <img className="rounded-pill" width="40" src={channel.avatar}/>
                    <h1 className="text-white text-center" >{channel.title}</h1>
                    <p className="text-white text-center" >{channel.description}</p>

                    </div>
        ))}
            </>
        )
}