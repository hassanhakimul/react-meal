import { Route, Routes } from 'react-router-dom';
import './App.css';
import Restaurant from './component/Restaurant/Restaurant';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/restaruant' element={<Restaurant></Restaurant>}></Route>
      </Routes>
    </div>
  );
}

export default App;
