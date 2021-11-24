import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createVocaFB } from './redux/modules/voca';


const AddVoca = (props) => {
    
    const word = React.useRef(null);
    const hiragana = React.useRef(null);
    const meaning = React.useRef(null);
    const example = React.useRef(null);
    const translate = React.useRef(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const addVocaList = () => {
        dispatch(createVocaFB({
            word: word.current.value,
            hiragana: hiragana.current.value,
            meaning: meaning.current.value,
            example: example.current.value,
            translate: translate.current.value,
            checked: false,
        }))
    };

    return (
        <Container>
            <Title>단어 추가하기</Title>
            <AddBox>
                <label>단어</label>
                <input type="text" ref={word} />
                <label>히라가나</label>
                <input type="text" ref={hiragana} />
                <label>의미</label>
                <input type="text" ref={meaning} />
                <label>예문</label>
                <input type="text" ref={example} />
                <label>해석</label>
                <input type="text" ref={translate} />
                <button
                    onClick={() => {
                        addVocaList();
                        history.push("/")
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