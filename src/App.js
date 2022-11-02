import GlobalStyle from "./assets/styles/globalStyle";
import Header from "./components/Header";
import ListMoviesPage from "./pages/ListMoviesPage/ListMoviesPage";
import ScheduleMoviePage from "./pages/ScheduleMoviesPage/ScheduleMoviePage";
import ReserveSeatPage from "./pages/ReserveSeatPage/ReserveSeatPage";
import SuccessPage from "./pages/SucessPage/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListMoviesPage />} />
          <Route path="/sessoes/:idFilme" element={<ScheduleMoviePage />} />
          <Route path="/assentos/:idSessao" element={<ReserveSeatPage />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
