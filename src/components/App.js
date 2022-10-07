import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../globalStyle'
import Header from './Header'
import ListMoviesPage from './ListMoviesPage'
import ScheduleMoviePage from './ScheduleMoviePage'
import SeatsMoviePage from './SeatsMoviePage'
import ReservationSuccessedPage from './ReservationSuccessedPage'

export default function App() {

    return (
        <><GlobalStyle/>
            <Header/>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListMoviesPage/>}/>
                    <Route path='/sessoes/:idFilme' element={<ScheduleMoviePage/>}/>
                    <Route path='/assentos/:idSessao' element={<SeatsMoviePage/>}/>
                    <Route path='/sucesso' element={<ReservationSuccessedPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};


