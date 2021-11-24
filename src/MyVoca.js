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

    React.useEffect(() => {
        dispatch(loadVocaFB());
    }, []);

    return (
        <div>
            <Container>
                {voca_list.map((list, voca_index) => {
                    return (
                        <Cardbox
                            key={voca_index}>
                            <VocaBox>
                                <p
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',}}
                                >{list.word}</p>
                                <p
                                    style={{ fontSize: '0.8rem' }}
                                >[ {list.hiragana} ]</p>
                            </VocaBox>
                            <InfoBox>
                                <IconBox>
                                    <Icon>
                                    <CheckRoundedIcon />
                                    <BorderColorRoundedIcon
                                        onClick={() => {
                                            history.push("/detail/" + voca_index);
                                        }}/>
                                    <ClearRoundedIcon
                                        onClick={() => {
                                            dispatch(deleteVocaFB(list.id));
                                        }}/>
                                    </Icon>
                                </IconBox>
                                <VocaInfo>
                                    <Info>meaning</Info>
                                    <VocaData
                                    style={{color: 'whitesmoke',}}
                                    >{list.meaning}</VocaData>
                                    <Info>example sentence</Info>
                                    <VocaData>{list.example}</VocaData>
                                    <Info>translation</Info>
                                    <VocaData>{list.translate}</VocaData>
                                </VocaInfo>
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
    max-width: 1200px;
    height: 100vh;

    padding: 40px 40px 0;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 40px;
    align-content: flex-start;
`;

const Cardbox = styled.div`
    min-width: 400px;
    height: 200px;
    padding: 20px;

    background: #1C1C1D;
    border-radius: 20px;

    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    grid-column-gap: 30px;
`;

const VocaBox = styled.div`
    /* border: 1px solid whitesmoke; */
    text-align: center;

    & p {
        margin: 10px;
    }

`;

const InfoBox = styled.div`
    /* border: 1px solid whitesmoke; */

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const IconBox = styled.div`
    /* border: 1px solid whitesmoke; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    & svg {
        margin: 0 5px;
    }
`;

const Icon = styled.div`

`;

const VocaInfo = styled.div`
    /* border: 1px solid whitesmoke; */
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const Info = styled.p`
    font-size: 0.7rem;
    margin: 0 0 7px 0;
`;

const VocaData = styled.p`
    color: #8FFFF8;
    margin: 5px 0 20px 0;
`;

const AddButton = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;

    width: 50px;
    height: 50px;
`;


export default MyVoca;