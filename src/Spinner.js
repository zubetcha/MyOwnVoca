import React from 'react';
import styled from 'styled-components'
import { keyframes } from '@emotion/react';

// Components
import { ReactComponent as Loading } from './threeDots.svg';

const Spinner = (props) => {
    return (
        <Outer>
            <Loading fill="#FA8072" />
        </Outer>
    )
}

const Outer = styled.div`
    background: #1C1C1D;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;



export default Spinner;