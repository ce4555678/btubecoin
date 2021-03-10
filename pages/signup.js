import Layout from '../components/Layout'
import { memo, useState } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import firebase from '../utils/firebase'
import 'firebase/auth'

function SignUp() {
    const router = useRouter()
    const [ Email, setEmail ] = useState('')
    const [ Password, setPassword ] = useState('')
    const [ PasswordAgain, setPasswordAgain ] = useState('')
    const [ Okmessage, setOkmessage ] = useState({ok: null, message: ''})


    function handleSubmit(event) {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(Email, Password)
        .then(() => router.push('/login'))
        .catch((error) => {
            console.log(error)
            setOkmessage({ok: false, message: error.message})
        })

            
    }

    return (
        <Layout title="Sign Up">
           <Container sm="true">
           <h1 className="text-center text-white">Sign Up</h1>
           {Okmessage.ok == true ? <Alert variant="success">
               {Okmessage.message}
           </Alert> : null}
           {Okmessage.ok == false? <Alert variant="danger">
               {Okmessage.message}
           </Alert> : null}
                    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)}  className="text-center bg-dark text-white" type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted text-white">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} className="text-center bg-dark text-white" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group controlId="formBasicPasswordAgain">
            <Form.Label className="text-white">Password Again</Form.Label>
            <Form.Control onChange={(e) => setPasswordAgain(e.target.value)} className="text-center bg-dark text-white" type="password" placeholder="Password Again" required/>
        </Form.Group>
        <Form.Group controlId="formBasicAlready">
            <Link href="/login">
            <a href="#"  className="text-white text-right">already have an account?</a>
            </Link>
        </Form.Group>
        {Password !== PasswordAgain ? <Button variant="primary" type="submit" disabled={true}>
            Submit
        </Button> : <Button variant="primary" type="submit">
            Submit
        </Button>}
        </Form>
           </Container>
        </Layout>
    )
}

export default memo(SignUp)