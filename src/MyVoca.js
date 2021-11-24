import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// Components

const MyVoca = (props) => {
    let history = useHistory();
    return (
        <div>
            <Container>
                <Cardbox>
                    <p>단어</p>
                    <p>히라가나</p>
                    <p>의미</p>
                    <p>예문</p>
                    <p>해석</p>
                </Cardbox>
                <Cardbox>
                    <p>단어</p>
                    <p>히라가나</p>
                    <p>의미</p>
                    <p>예문</p>
                    <p>해석</p>
                </Cardbox>
                <Cardbox>
                    <p>단어</p>
                    <p>히라가나</p>
                    <p>의미</p>
                    <p>예문</p>
                    <p>해석</p>
                </Cardbox>
                <Cardbox>
                    <p>단어</p>
                    <p>히라가나</p>
                    <p>의미</p>
                    <p>예문</p>
                    <p>해석</p>
                </Cardbox>
                <Cardbox>
                    <p>단어</p>
                    <p>히라가나</p>
                    <p>의미</p>
                    <p>예문</p>
                    <p>해석</p>
                </Cardbox>
            </Container>
            <AddButton
            onClick={() => {
                history.push("/add");
            }}
            >추가</AddButton>
        </div>
            
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid black;

    padding-top: 40px;
    margin: auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 40px;
`;

const Cardbox = styled.div`
    width: 400px;
    height: 180px;

    border: 1px solid black;
    border-radius: 20px;

`;

const AddButton = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;

    width: 50px;
    height: 50px;
`;

export default MyVoca;