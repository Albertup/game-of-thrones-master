import './App.css';
import {useTranslation} from 'react-i18next'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { MyContext } from './components/MyContext/MyContext';

import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharDetailPage from './pages/CharDetailPage/CharDetailPage';
import HousesPage from './pages/HousesPage/HousesPage';
import HouDetailPage from './pages/HouDetailPage/HouDetailPage';
import TimelinePage from './pages/TimelinePage/TimelinePage';

function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code)
  }



  return (
    <MyContext.Provider value={{t, changeLanguaje}}> 
    <Router>
    <div >
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
    </div>
    </Router>
    </MyContext.Provider>  
  );
}

export default App;
