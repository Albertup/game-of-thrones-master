

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharDetailPage from './pages/CharDetailPage/CharDetailPage';
import HousesPage from './pages/HousesPage/HousesPage';
import HouDetailPage from './pages/HouDetailPage/HouDetailPage';
import TimelinePage from './pages/TimelinePage/TimelinePage';

function App() {
      const user = {
        name: "Lelouch Lamperouge",
        age: 18,
        anime: "Code Geass",
        img: "https://somoskudasai.com/wp-content/uploads/2021/12/portada_code-geass-17.jpg",
        favoriteFoods: ["Pizza", "Pasta", "Lasaña", "Ramen"]
    }



  return (
    <Router>
    <div >
      <header>
        
      </header>
      <main>
              <div>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route exact path='/Characters' element={<CharactersPage/>}/>
                  <Route exact path='/Characters/:idCharacter' element={<CharDetailPage/>}/>
                  <Route exact path='/Houses' element={<HousesPage/>}/>
                  <Route exact path='/Houses/:name' element={<HouDetailPage/>}/>
                  <Route exact path='/Timeline' element={<TimelinePage/>}/>
                </Routes>
              </div>        
      
      </main>
      <footer>
        <Navbar/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
