import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const AddVoca = (props) => {
    let history = useHistory();
    return (
        <Container>
            <Title>단어 추가하기</Title>
            <AddBox>
                <label>단어</label>
                <input type="text" />
                <label>히라가나</label>
                <input type="text" />
                <label>의미</label>
                <input type="text" />
                <label>예문</label>
                <input type="text" />
                <label>해석</label>
                <input type="text" />
                <button
            onClick={() => {
                history.push("/");
            }}
            >추가하기</button>
            </AddBox>

            
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    height: 800px;
    border: 1px solid black;

    margin: auto;
`;

const Title = styled.p`
    text-align: center;
`;

const AddBox = styled.form`

    & label {
        display: block;
    }    

    & input {
        display: block;
    }
    
`;

export default AddVoca;