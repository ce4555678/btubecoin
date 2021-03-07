import Layout from '../components/Layout'
import { memo, useState } from 'react'
import instance from '../utils/BaseUrl'
import { Form, Button } from 'react-bootstrap'
import Link from 'next/link'
function Login() {
    return (
        <Layout title="Login">
            <h1 className="text-center text-white">Login</h1>
                    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control className="text-center bg-dark text-white" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted text-white">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control className="text-center bg-dark text-white" type="password" placeholder="Password" />
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
        </Layout>
    )
}

export default memo(Login)