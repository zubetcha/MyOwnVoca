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
    const voca_index = params.index;
    const current_voca = voca_list[voca_index];

    const updateVocaList = () => {
        dispatch(updateVocaFB({
            word: word.current.value,
            pronunciation: pronunciation.current.value,
            meaning: meaning.current.value,
            example: example.current.value,
            translate: translate.current.value,
            checked: false,
        }, current_voca.id))
    };

    return (
        <Container>
            <UpdateBox>
                <label>word</label>
                <input type="text" ref={word} defaultValue={current_voca ? current_voca.word : ""} />
                <label>pronunciation</label>
                <input type="text" ref={pronunciation} defaultValue={current_voca ? current_voca.pronunciation : ""} />
                <label>meaning</label>
                <input type="text" ref={meaning} defaultValue={current_voca ? current_voca.meaning : ""} />
                <label>example sentence</label>
                <input type="text" ref={example} defaultValue={current_voca ? current_voca.example : ""} />
                <label>translation</label>
                <input type="text" ref={translate} defaultValue={current_voca ? current_voca.translate : ""} />
                <button
                    onClick={() => {
                        history.push("/");
                        updateVocaList();
                    }}
                >CHANGE<br/>VOCA</button>
            </UpdateBox>
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

        font-size: 0.9rem;
        color: #C2C2C2;
    }    
    & input {
        display: block;
        width: 296px;
        margin-bottom: 40px;
        color: whitesmoke;
        font-size: 1rem;


        outline: 0;
        border: none;
        border-bottom: 1px solid whitesmoke;
        background-color: transparent;

        &:focus {
            outline: none;
            border-bottom: 1px solid #FFA197;
        }
    }

    & button {
        display: block;
        outline: 0;
        border: 0;
        /* border: 1px solid whitesmoke; */
        border-radius: 50%;
        background-color: #FE7262;

        width: 80px;
        height: 80px;

        color: whitesmoke;
        font-size: 0.9rem;
        font-weight: bold;
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
    }
`;

export default Detail;