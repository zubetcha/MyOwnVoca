import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVocaFB, loadVocaFB } from './redux/modules/voca';
import { db } from './firebase';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';



// Components

// material UI
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { checkboxClasses } from '@mui/material';

const MyVoca = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const voca_list = useSelector((state) => state.voca.list);

    React.useEffect( () => {
        dispatch(loadVocaFB());
    }, []);

    return (
        <div>
            <Container>
                {voca_list.map((list, voca_index) => {
                    return (
                        <Cardbox
                            key={voca_index}
                        >
                            <WordBox>
                                <p>{list.word}</p>
                                <p
                                    style={{ fontSize: '0.8rem' }}
                                >[{list.hiragana}]</p>
                            </WordBox>
                            <div>
                                <CheckRoundedIcon />
                                <BorderColorRoundedIcon
                                    onClick={() => {
                                        history.push("/detail/" + voca_index);
                                    }}
                                />
                                <ClearRoundedIcon
                                    onClick={() => {
                                        dispatch(deleteVocaFB(list.id));
                                    }}
                                />
                            </div>
                            <InfoBox>
                                <Info>의미</Info>
                                <p>{list.meaning}</p>
                                <Info>예문</Info>
                                <Example>{list.example}</Example>
                                <Info>해석</Info>
                                <Example>{list.translate}</Example>
                            </InfoBox>
                        </Cardbox>
                    )
                })}
            </Container>
            <AddButton
                onClick={() => {
                    history.push("/addVoca");
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
    height: 200px;

    border: 1px solid black;
    border-radius: 20px;

    display: flex;
    align-items: center;

`;

const WordBox = styled.div`
    width: 150px;

    border: 1px solid black;
    text-align: center;

`;

const InfoBox = styled.div`

    border: 1px solid black;

`;

const Info = styled.p`
    font-size: 0.7rem;
`;

const Example = styled.p`
    color: #6495ED;
`;

const AddButton = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;

    width: 50px;
    height: 50px;
`;



export default MyVoca;