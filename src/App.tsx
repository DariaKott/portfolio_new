import './App.css';
//import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Skills } from './layout/skills/Skills';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
