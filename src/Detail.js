import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateVocaFB } from './redux/modules/voca';


const Detail = (props) => {

    const word = React.useRef(null);
    const hiragana = React.useRef(null);
    const meaning = React.useRef(null);
    const example = React.useRef(null);
    const translate = React.useRef(null);

    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    const voca_list = useSelector((state) => state.voca.list);
    const voca_index = params.index;
    const current_voca = voca_list[voca_index];

    const updateVocaList = () => {
        dispatch(updateVocaFB({
            word: word.current.value,
            hiragana: hiragana.current.value,
            meaning: meaning.current.value,
            example: example.current.value,
            translate: translate.current.value,
            checked: false,
        }, current_voca.id))
    };

    return (
        <Container>
        <Title>단어 수정하기</Title>
        <UpdateBox>
            <label>단어</label>
            <input type="text" ref={word} defaultValue={current_voca? current_voca.word : ""} />
            <label>히라가나</label>
            <input type="text" ref={hiragana} defaultValue={current_voca? current_voca.hiragana : ""} />
            <label>의미</label>
            <input type="text" ref={meaning} defaultValue={current_voca? current_voca.meaning : ""} />
            <label>예문</label>
            <input type="text" ref={example} defaultValue={current_voca? current_voca.example : ""} />
            <label>해석</label>
            <input type="text" ref={translate} defaultValue={current_voca? current_voca.translate : ""} />
            <button
                onClick={() => {
                    history.push("/");
                    updateVocaList();
                }}
            >수정하기</button>
        </UpdateBox>
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

const UpdateBox = styled.form`

    & label {
        display: block;
    }    

    & input {
        display: block;
    }
    
`;

export default Detail;