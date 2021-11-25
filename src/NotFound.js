import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const NotFound = (props) => {
    const history = useHistory();

    return (
        <Container>
            <p>Sorry, the path is wrong.</p>
            <GoBack
            onClick={() => {
                history.push('/');
            }}
            >GO<br/>BACK</GoBack>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 440px;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: hidden;

    width: 450px;
    height: 600px;

    background: #1C1C1D;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);

    & p {
        margin: 100px 0;
        text-align: center;
        color: whitesmoke;
        font-size: 1.5rem;
    }
`;

const GoBack = styled.button`
    display: block;
    outline: 0;
    border: 0;
    border-radius: 50%;
    background-color: #FE7262;

    width: 80px;
    height: 80px;

    color: whitesmoke;
    font-size: 0.9rem;
    font-weight: bold;
    line-height: 150%;
    margin: 300px auto 0 auto;

    cursor: pointer;

    will-change: transform;
    transition: transform 450ms;

    &:hover {
        background-color: #FF8A7D;
        transition: transform 450ms;
        transform: translateY(-10px);
    }
`;

export default NotFound;