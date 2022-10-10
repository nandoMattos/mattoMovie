import GlobalStyle from '../globalStyle'
import Header from './Header'
import ListMoviesPage from './Pages/ListMoviesPage'
import ScheduleMoviePage from './Pages/ScheduleMoviePage'
import ReserveSeatPage from './Pages/ReserveSeatPage'
import SuccessPage from './Pages/SuccessPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

    return (
        <><GlobalStyle/>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListMoviesPage/>}/>
                    <Route path='/sessoes/:idFilme' element={<ScheduleMoviePage/>}/>
                    <Route path='/assentos/:idSessao' element={<ReserveSeatPage/>}/>
                    <Route path='/sucesso' element={<SuccessPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};


