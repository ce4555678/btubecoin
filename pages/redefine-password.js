import Layout from '../components/Layout'
import { memo, useState } from 'react'
import instance from '../utils/BaseUrl'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import Link from 'next/link'
import firebase from '../utils/firebase'
import 'firebase/auth'
import { useRouter } from 'next/router'

function RedefinePassword() {
    const [Email, setEmail] = useState('')
    const [ Okmessage, setOkmessage ] = useState({ok: null, message: ''})

    const router = useRouter()
    firebase.auth().languageCode = router.locale

    function handleSubmit(event) {
        event.preventDefault()

        firebase.auth().sendPasswordResetEmail(Email)
        .then(() => {
            setOkmessage({ok: true, message: "ok"})
        })
        .catch((error) => {
            setOkmessage({ok: false, message: error.message})
        })
            
    }

    return (
        <Layout title="Redefine Password">
         <Container sm="true">
         <h1 className="text-center text-white">Redefine Password</h1>
         {Okmessage.ok == true ? <Alert variant="success">
               {Okmessage.message}
           </Alert> : null}
           {Okmessage.ok == false? <Alert variant="danger">
               {Okmessage.message}
           </Alert> : null}
                    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} className="text-center bg-dark text-white" type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Button variant="primary" className="mr-2" type="submit">
            Submit
        </Button>
        </Form>
         </Container>
        </Layout>
    )
}

export default memo(RedefinePassword)