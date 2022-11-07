import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [terms, setTerm] = useState(false);
    const handleTerms = (e) => {
        setTerm(e.target.checked);
    }

    const handleShowPassword = () => {
        if (showPassword === false) {
            setShowPassword(true);
            setPasswordType("text");
        } else {
            setShowPassword(false);
            setPasswordType("password");
        }
    }
    return (
        <div className='w-25 mx-auto bg-dark text-white p-5 rounded-3 mt-5'>
            <h4 className='text-center mb-3'>Please Sign Up!</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type={passwordType}
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">
                            {
                                showPassword === false ? <FaEyeSlash onClick={handleShowPassword} /> : <FaEye onClick={handleShowPassword} />
                            }


                        </InputGroup.Text>
                    </InputGroup>

                </Form.Group>
                <Form.Group className="mb-3 text-warning" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleTerms} type="checkbox" label="Agree with our terms & condition?" />
                </Form.Group>
                <p className='text-white fs-6'>New to our site? please <Link className='text-decoration-none fw-bold text-danger' to="/register">Sign Up</Link></p>
                <Button variant="danger" type="submit" disabled={!terms}>
                    Sign Up
                </Button>
            </Form>
        </div >
    );
};

export default Register;