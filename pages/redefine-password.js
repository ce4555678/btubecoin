import Layout from '../components/Layout'
import { memo, useState } from 'react'
import instance from '../utils/BaseUrl'
import { Form, Button } from 'react-bootstrap'
import Link from 'next/link'
function Login() {
    return (
        <Layout title="Redefine Password">
            <h1 className="text-center text-white">Redefine Password</h1>
                    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control className="text-center bg-dark text-white" type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" className="mr-2" type="submit">
            Submit
        </Button>
        </Form>
        </Layout>
    )
}

export default memo(Login)