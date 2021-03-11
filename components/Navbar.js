import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Link from 'next/link'
import { memo, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useRouter} from 'next/router'
import { faFire, faHome, faVideo, faClock, faSearch, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../contexts/UserContext'

function NavBar() {
    const router = useRouter()
    const {user, auth} = useContext(UserContext)

    return (
        <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
    <Link href="/"><Navbar.Brand href="/"><img width="40" height="40" alt="logo" src="/logo.svg"/></Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        <Link href="/">
            {router.pathname == "/" ?
            <Nav.Link className="active" href="/"><FontAwesomeIcon icon={faHome} size={'1x'}/> Home</Nav.Link> :
            <Nav.Link href="/"><FontAwesomeIcon icon={faHome} size={'1x'}/> Home</Nav.Link>}
        </Link>

        <Link href="/on-the-rise">
        {router.pathname == "/on-the-rise" ?
        <Nav.Link className="active" href="/on-the-rise"><FontAwesomeIcon  icon={faFire} size={'1x'}/> On The Rise</Nav.Link> :
        <Nav.Link href="/on-the-rise"><FontAwesomeIcon  icon={faFire} size={'1x'}/> On The Rise</Nav.Link>}
        </Link>

        <Link href="/watch-later">
            {router.pathname == "/watch-later" ?
            <Nav.Link className="active" href="/watch-later"><FontAwesomeIcon icon={faClock} size={'1x'}/> Watch Later</Nav.Link> :
            <Nav.Link href="/watch-later"><FontAwesomeIcon icon={faClock} size={'1x'}/> Watch Later</Nav.Link>}
        </Link>

        <Link href="/send-video">
            {router.pathname == "/send-video" ? 
            <Nav.Link className="active" href="/send-video"><FontAwesomeIcon icon={faVideo} size={'1x'}/> Send Video</Nav.Link> :
            <Nav.Link href="/send-video"><FontAwesomeIcon icon={faVideo} size={'1x'}/> Send Video</Nav.Link>}
        </Link>
        { auth ?  <Nav.Link href="/logout"><FontAwesomeIcon icon={faSignOutAlt} size={'1x'}/> Logout</Nav.Link> : null }
        { auth == false ?  <Nav.Link href="/login"><FontAwesomeIcon icon={faSignInAlt} size={'1x'}/> Login</Nav.Link> : null }
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2 bg-dark text-center text-white" />
        <Button variant="secondary"><FontAwesomeIcon icon={faSearch} size={'1x'}/></Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default memo(NavBar)

