import Layout from '../components/Layout'
import { memo, useState } from 'react'
import instance from '../utils/BaseUrl'
import { Form, Button, Alert } from 'react-bootstrap'
import Link from 'next/link'
import firebase from '../utils/firebase'
import 'firebase/auth'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

function Login() {
    const router = useRouter()
    const [Email, setEmail] = useState('')
    const [Password, setPaasword] = useState('')
    const [Okmessage, setOkmessage ] = useState({ok: true, message: ''})

    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

    function handleSubmit(event) {
        event.preventDefault()
        console.log({Email, Password})
        firebase.auth().signInWithEmailAndPassword(Email, Password)
        .then(() => {
            router.push('/')
        })
        .catch((error) => {
            setOkmessage({ok: false, message: error.message})
        })
      }
    return (
        <Layout title="Login">
          <Container sm="true">
          <h1 className="text-center text-white">Login</h1>
          {Okmessage.ok ? null : 
          <Alert variant="danger">
              {Okmessage.message}
              </Alert>}

                    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} className="text-center bg-dark text-white" type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted text-white">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control onChange={(e) => setPaasword(e.target.value)} className="text-center bg-dark text-white" type="password" placeholder="Password" required/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
        <Link href="/redefine-password">
        <a href="#"  className="text-white text-right">Forgot your password?</a>
        </Link>
        </Form.Group>
        <p className="text-white">
        <Button variant="primary" className="mr-2" type="submit">
            Submit
        </Button>Don't have an account? <Link href="/signup">
        <a className="ml-1" href="#" >
         Sign Up
        </a>
        </Link>
        </p>
        </Form>
          </Container>
        </Layout>
    )
}

export default memo(Login)