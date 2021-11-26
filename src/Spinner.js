import React from 'react';
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Spinner = (props) => {
    return (
        <Outer>
            <DarkModeIcon style={{
                color: '#F4D03F',
                fontSize: '180px',

            }}/>
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

    
`;

export default Spinner;