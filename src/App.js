import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


// Components
import MyVoca from './MyVoca';
import AddVoca from './AddVoca';
import Detail from './Detail';
import NotFound from './NotFound';


function App() {

    const history = useHistory();

    return (
        <div className="App">
            <Header>
                <Oval
                    onClick={() => {
                        history.push('/');
                    }}>
                    <Title>My own Voca</Title>
                </Oval>
            </Header>
            <Container>
                <Switch>
                    <Route exact path="/" component={MyVoca} />
                    <Route exact path="/addVoca" component={AddVoca} />
                    <Route exact path="/detail/:id" component={Detail} />
                    <Route path="" component={NotFound} />
                </Switch>
            </Container>
        </div>
    );
}


const Header = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 0.5px solid whitesmoke;
    background: #252627;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Oval = styled.div`
    width: 200px;
    height: 60px;
    border: 0.5px solid whitesmoke;
    border-radius: 100px / 30px;
    cursor: default;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-family: 'roboto';
    font-size: 1.3rem;
    font-weight: 300;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 100px auto 0;   
`;

export default App;