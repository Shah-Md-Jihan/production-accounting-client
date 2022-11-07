import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div className='w-25 mx-auto bg-dark text-white p-5 rounded-3 mt-5'>
            <h4 className='text-center mb-3'>Please Login!</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-white fs-6'>New to our site? please <Link className='text-decoration-none fw-bold text-danger' to="/register">Sign Up</Link></p>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </div>

    );
};

export default Login;