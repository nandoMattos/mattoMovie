import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../globalStyle'
import Header from './Header'
import ScreenMovieSchedule from './ScreenMovieSchedule'
import ScreenMoviesList from './ScreenMoviesList'
import ScreenMovieSession from './ScreenMovieSession'
import ScreenSuccess from './ScreenSuccess'

export default function App() {

    return (
        <><GlobalStyle/>
            <Header/>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ScreenMoviesList/>}/>
                    <Route path='/sessoes/:idFilme' element={<ScreenMovieSchedule/>}/>
                    <Route path='/assentos/:idSessao' element={<ScreenMovieSession/>}/>
                    <Route path='/sucesso' element={<ScreenSuccess/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};


