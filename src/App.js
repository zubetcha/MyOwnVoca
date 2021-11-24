import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


// Components
import MyVoca from './MyVoca';
import AddVoca from './AddVoca';
import Detail from './Detail';


function App() {
    return (
        <div className="App">
            <Header>
                <p>My Own Voca</p>
            </Header>
            <Container>
                <Switch>
                    <Route exact path="/" component={MyVoca} />
                    <Route exact path="/addVoca" component={AddVoca} />
                    <Route exact path="/detail/:index" component={Detail} />
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