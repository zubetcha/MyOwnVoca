import React from 'react';
import styled from 'styled-components';

const VocaCard = (props) => {
    return (
        <div>
            <Container>
                <p>단어</p>
                <p>히라가나</p>
                <p>의미</p>
                <p>예문</p>
                <p>해석</p>
            </Container>
            <Container>
                <p>단어</p>
                <p>히라가나</p>
                <p>의미</p>
                <p>예문</p>
                <p>해석</p>
            </Container>
            <Container>
                <p>단어</p>
                <p>히라가나</p>
                <p>의미</p>
                <p>예문</p>
                <p>해석</p>
            </Container>
        </div>

    )
}

const Container = styled.div`
    width: 400px;
    height: 200px;
    border: 1px solid black;
    border-radius: 20px;

`;


export default VocaCard;