import Layout from '../components/Layout'
import { memo, useState } from 'react'
import instance from '../utils/BaseUrl'
import { Form, Button, Container } from 'react-bootstrap'
import Link from 'next/link'
function Login() {
    return (
        <Layout title="Sign Up">
           <Container sm>
           <h1 className="text-center text-white">Sign Up</h1>
                    <Form>
                    <Form.Group controlId="formBasicTitle">
                    <Form.Label className="text-white">Title</Form.Label>
                    <Form.Control className="text-center bg-dark text-white" type="text" placeholder="Your Channel Title" required/>
                    </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control className="text-center bg-dark text-white" type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted text-white">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control className="text-center bg-dark text-white" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group controlId="formBasicPasswordAgain">
            <Form.Label className="text-white">Password Again</Form.Label>
            <Form.Control className="text-center bg-dark text-white" type="password" placeholder="Password Again" required/>
        </Form.Group>
        <Form.Group controlId="formBasicAlready">
            <Link href="/login">
            <a href="#"  className="text-white text-right">already have an account?</a>
            </Link>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
           </Container>
        </Layout>
    )
}

export default memo(Login)