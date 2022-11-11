

import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharDetailPage from './pages/CharDetailPage/CharDetailPage';
import HousesPage from './pages/HousesPage/HousesPage';
import HouDetailPage from './pages/HouDetailPage/HouDetailPage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
// import Header from './components/Header/Header';

function App() {
  return (
    <Router>
    <div className='b-size-page'>
      <main>
              <div>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route exact path='/Characters' element={<CharactersPage/>}/>
                  <Route exact path="/Characters/:idCharacter" element={<CharDetailPage/>}/>
                  <Route exact path='/Houses' element={<HousesPage/>}/>
                  <Route exact path='/Houses/:name' element={<HouDetailPage/>}/>
                  <Route exact path='/Timeline' element={<TimelinePage/>}/>
                </Routes>
              </div>        
      
      </main>
    </div>
    </Router>
  );
}

export default App;
