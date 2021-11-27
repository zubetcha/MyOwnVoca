import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVocaFB, loadVocaFB, checkVocaFB } from './redux/modules/voca';

// Components
import Spinner from './Spinner';

// material UI
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded';

const MyVoca = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const is_loaded = useSelector((state) => state.voca.is_loaded);
    const voca_list = useSelector((state) => state.voca.list);

    React.useEffect(() => {
        dispatch(loadVocaFB());
    }, []);

    return (
        <div>
            {!is_loaded && <Spinner />}
            <Container>
                {voca_list.map((voca) => {
                    return (
                        <Cardbox
                            key={voca.id}>
                            <VocaBox>
                                <Word>{voca.word}</Word>
                                <p style={{ fontSize: '0.8rem' }}>
                                    [ {voca.pronunciation} ]</p>
                            </VocaBox>
                            <InfoBox>
                                <IconBox checked={voca.checked}>
                                    <CheckRoundedIcon
                                        className='check_icon'
                                        onClick={() => {
                                            dispatch(checkVocaFB(voca.id));
                                        }} />
                                    <BorderColorRoundedIcon
                                        onClick={() => {
                                            history.push("/detail/" + voca.id);
                                        }} />
                                    <ClearRoundedIcon
                                        onClick={() => {
                                            if (window.confirm('단어를 삭제하시겠습니까?')) {
                                                return dispatch(deleteVocaFB(voca.id));
                                            } else {
                                                return false;
                                            }
                                        }} />
                                </IconBox>
                                <div>
                                    <Info>meaning</Info>
                                    <VocaData
                                        style={{ color: 'whitesmoke', }}
                                    >{voca.meaning}</VocaData>
                                    <Info>example sentence</Info>
                                    <VocaData>{voca.example}</VocaData>
                                    <Info>translation</Info>
                                    <VocaData>{voca.translate}</VocaData>
                                </div>
                            </InfoBox>
                        </Cardbox>
                    )
                })}
            </Container>
            <ScrollButton
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                style={{ bottom: '115px', }}>
                <ArrowUpwardRoundedIcon />
            </ScrollButton>
            <AddVoca>
                <AddRoundedIcon
                    onClick={() => {
                        history.push("/addVoca");
                    }} />
            </AddVoca>
            <ScrollButton
                onClick={() => {
                    window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' });
                }}
                style={{ bottom: '25px', }}>
                <ArrowDownwardRounded />
            </ScrollButton>
        </div>
    )
}



const Container = styled.div`
    max-width: 1200px;
    height: 100vh;

    padding: 40px 14px 0;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 40px;
`;

const VocaBox = styled.div`
    /* border: 1px solid whitesmoke; */
    text-align: center;

    & p {
        margin: 5px 0;
    }

`;

const Word = styled.p`
    font-size: 20px;
    font-weight: bold;

    display: inline-block;

    &::after {
        content: '';
        display: block;
        border-bottom: 5px solid #FA8072;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    } 
    &:hover::after {
        transform: scaleX(1);
    }
`;

const Cardbox = styled.div`
    min-width: 320px;
    height: 200px;
    padding: 20px;

    background-color: #1C1C1D;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);

    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    grid-column-gap: 20px;

    &:hover > ${VocaBox} > ${Word} {
        &::after {
        content: '';
        display: block;
        border-bottom: 5px solid #FA8072;
        transform: scaleX(1);
        transition: transform 250ms ease-in-out;
        } 
    }
`;

const InfoBox = styled.div`
`;

const IconBox = styled.div`
    /* border: 1px solid whitesmoke; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    & svg {
        margin: 0 5px;
        font-size: 1.2rem;
        &:hover {
            cursor: pointer;
        }
    }

    .check_icon {
        color: ${(props) => (props.checked == true ? '#FA8072' : 'whitlesmoke')};
    }
`;

const Info = styled.p`
    font-family: 'roboto';
    font-weight: 500;
    font-size: 0.7rem;
    margin: 0 0 7px 0;
    color: #C2C2C2;
`;

const VocaData = styled.p`
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 0.9rem;
    color: #8FFFF8;
    margin: 5px 0 20px 0;
`;

const SlideIn = keyframes`
    from {
      transform: translateX(200%);
    }
    to {
      transform: translateX(0%);
    }
`;

const AddVoca = styled.div`
    & svg {
        font-size: 1.5rem;
    }

    position: fixed;
    right: 10px;
    bottom: 70px;
    width: 30px;
    height: 30px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 0.3px solid #9F9F9F;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 7px 0px;

    will-change: transform;
    transition: transform 600ms;

    animation: ${SlideIn} 1000ms linear;

    &:hover {
        box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 7px 0px;
        transform: rotate(90deg);
        border: 0;
        background: #FA8072;
        opacity: 0.9;
    }
`;

const ScrollButton = styled.div`
    & svg {
        font-size: 1.5rem;
    }

    position: fixed;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 0.3px solid #9F9F9F;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 7px 0px;

    animation: ${SlideIn} 1000ms linear;
`;


export default MyVoca;