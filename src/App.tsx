import './App.css';
import { Contacts } from './layout/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
//import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Projects } from './layout/projects/Projects';
import { Skills } from './layout/skills/Skills';
import { Container } from './components/Container';



function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
