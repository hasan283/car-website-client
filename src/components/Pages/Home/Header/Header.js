import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    // Handle Sign Out 
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className="logo"><h4 style={{ color: '#ffca28' }}><b>INVENTORY CAR</b></h4></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#about">About us</Nav.Link>
                            <Nav.Link href="home#inventory">Inventory</Nav.Link>
                            <Nav.Link href="home#teams">Teams</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/addInventory">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/manageInventory">Manage-Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="/order">Order</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {/* <Nav.Link as={Link} to="/overflow">StackOverflow</Nav.Link> */}

                        </Nav>
                        <Nav>

                            {
                                user ?
                                    <Link to='/login'>
                                        <button className='text-white' style={{ border: 'none', background: 'none' }} onClick={handleSignOut}>Sing Out</button>
                                    </Link>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;