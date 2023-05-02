import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import AllQuiz from './pages/AllQuiz';
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';
import Quiz from './pages/Question';
import Login from './pages/Authorization/Login';
import Register from './pages/Authorization/Register';
import { useAuthContext } from './hooks/useAuthContext';
import UserStatistic from './pages/UserStatistic';

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="App" style={{ marginTop: '10%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/createquiz"
              element={user ? <CreateQuiz /> : <Navigate to={'/login'} />}
            />
            <Route path="/allquiz" element={user ? <AllQuiz /> : <Navigate to={'/login'} />} />
            <Route path="/question" element={<Quiz />} />
            <Route path="/userstat" element={<UserStatistic />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={'/home'} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
