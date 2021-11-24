import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// Components
import MyVoca from './MyVoca';
import AddVoca from './AddVoca';


function App() {
    let history = useHistory();
    return (
        <div className="App">
            <Header>
                <p>My Own Voca</p>
            </Header>
            <Container>
                <Switch>
                    <Route exact path="/" component={MyVoca} />
                    <Route exact path="/add" component={AddVoca} />
                </Switch>
                
            </Container>
        </div>
    );
}

const Header = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid grey;
    background: white;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    
`;

const Container = styled.div`
    max-width: 1400px;
    margin: 60px auto 0;
    
`;



export default App;