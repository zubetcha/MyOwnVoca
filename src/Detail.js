import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateVocaFB } from './redux/modules/voca';


const Detail = (props) => {

    const word = React.useRef(null);
    const pronunciation = React.useRef(null);
    const meaning = React.useRef(null);
    const example = React.useRef(null);
    const translate = React.useRef(null);

    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    const voca_list = useSelector((state) => state.voca.list);
    // const voca_id = params.id;
    const voca_index = voca_list.findIndex((x) => {
        return x.id === params.id;
    });
    const current_voca = voca_list[voca_index];

    const updateVocaList = () => {
        let wordValue = word.current.value;
        let pronunciationValue = pronunciation.current.value;
        let meaningValue = meaning.current.value;
        let exampleValue = example.current.value;
        let translateValue = translate.current.value;

        if ((wordValue && pronunciationValue && meaningValue &&
            exampleValue && translateValue) !== '') {
            dispatch(updateVocaFB({
                word: wordValue,
                pronunciation: pronunciationValue,
                meaning: meaningValue,
                example: exampleValue,
                translate: translateValue,
                checked: current_voca.checked,
            }, current_voca.id));
            history.push("/");
        } else {
            window.alert('Please, fill in all blanks.');
            return false;
        }
    };

    return (
        <Container>
            <UpdateBox>
                <label>word</label>
                <TextArea type="text" ref={word} maxLength='14' 
                defaultValue={current_voca ? current_voca.word : ""} />
                <label>pronunciation</label>
                <TextArea type="text" ref={pronunciation} maxLength='20' 
                defaultValue={current_voca ? current_voca.pronunciation : ""} />
                <label>meaning</label>
                <TextArea type="text" ref={meaning} maxLength='20' 
                defaultValue={current_voca ? current_voca.meaning : ""} />
                <label>example sentence</label>
                <TextArea type="text" ref={example} maxLength='20' 
                defaultValue={current_voca ? current_voca.example : ""} />
                <label>translation</label>
                <TextArea type="text" ref={translate} maxLength='20' 
                defaultValue={current_voca ? current_voca.translate : ""} />
            </UpdateBox>
            <ChangeVocaButton
                    onClick={() => {
                        updateVocaList();
                    }}
                >CHANGE<br />VOCA</ChangeVocaButton>
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
`;

const UpdateBox = styled.form`
    width: 300px;
    padding-top: 50px;
    margin: auto;

    & label {
        display: block;
        margin-bottom: 8px;

        font-family: 'roboto';
        font-weight: 500;
        font-size: 0.8rem;
        color: #C2C2C2;
    }    
`;

const TextArea = styled.input`
    display: block;
    width: 296px;
    margin-bottom: 40px;

    color: whitesmoke;
    font-size: 0.9rem;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    

    border: none;
    border-bottom: 1px solid whitesmoke;
    background-color: transparent;

    &:focus {
        outline: none;
        border-bottom: 1px solid #FFA197;
    }   
`;

const ChangeVocaButton = styled.button`
    display: block;
    outline: 0;
    border: 0;
    border-radius: 50%;
    background-color: #FE7262;

    width: 80px;
    height: 80px;

    color: whitesmoke;
    font-family: 'roboto';
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 150%;
    margin: 30px auto 0 auto;
    cursor: pointer;

    will-change: transform;
    transition: transform 450ms;

    &:hover {
        background-color: #FF8A7D;
        transition: transform 450ms;
        transform: translateY(-10px);
    }
`;

export default Detail;