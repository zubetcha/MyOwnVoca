import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createVocaFB } from './redux/modules/voca';

const AddVoca = (props) => {

    const word = React.useRef(null);
    const pronunciation = React.useRef(null);
    const meaning = React.useRef(null);
    const example = React.useRef(null);
    const translate = React.useRef(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const addVocaList = () => {
        let wordValue = word.current.value;
        let pronunciationValue = pronunciation.current.value;
        let meaningValue = meaning.current.value;
        let exampleValue = example.current.value;
        let translateValue = translate.current.value;

        if ((wordValue && pronunciationValue && meaningValue &&
            exampleValue && translateValue) !== '') {
            dispatch(createVocaFB({
                word: wordValue,
                pronunciation: pronunciationValue,
                meaning: meaningValue,
                example: exampleValue,
                translate: translateValue,
                date: Date.now(),
                checked: false,
            }));
            history.push("/");
        } else {
            window.alert('Please, fill in all blanks.');
            return false;
        }
    };

    return (
            <Container>
                <AddBox>
                    <label>word</label>
                    <TextArea type="text" ref={word} maxLength='14' />
                    <label>pronunciation</label>
                    <TextArea type="text" ref={pronunciation} maxLength='20' />
                    <label>meaning</label>
                    <TextArea type="text" ref={meaning} maxLength='20' />
                    <label>example sentence</label>
                    <TextArea type="text" ref={example} maxLength='20' />
                    <label>translation</label>
                    <TextArea type="text" ref={translate} maxLength='20' />
                </AddBox>
                <AddVocaButton
                    onClick={() => {
                        addVocaList();
                    }}
                >ADD<br />VOCA</AddVocaButton>
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

const AddBox = styled.form`
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

const AddVocaButton = styled.button`
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

export default AddVoca;