import { Button } from 'bootstrap';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png';

const Hero = () => (
    <Jumbotron className='text-center'>
        <imgage src={logo} />

        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light">Abra sua conta</Button>
    </Jumbotron>
);

export default Hero;