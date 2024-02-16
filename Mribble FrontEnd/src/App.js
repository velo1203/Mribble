import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Home/Main';
import Docs from './pages/Docs/Docs';

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/note:id' element={<Main/>}/>
                <Route path='/docs' element={<Docs/>}/>
            </Routes>

        </div>
    );
}

export default App;
